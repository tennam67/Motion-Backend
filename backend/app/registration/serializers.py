from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.core.mail import send_mail
from rest_framework import serializers

from app.registration.models import Registration, code_generator

User = get_user_model()


def email_validation(email):
    try:
        User.objects.get(email=email)
        raise ValidationError(message='email already taken')
    except User.DoesNotExist:
        return email


def email_exists_validation(email):
    try:
        User.objects.get(email=email)
        return email
    except User.DoesNotExist:
        raise ValidationError(message='user does not exist')


class RegistrationSerializer(serializers.Serializer):
    email = serializers.EmailField(label='email to register', validators=[email_validation])

    def save(self, validated_data):
        # create inactive user
        email = validated_data.get('email')
        new_user = User(email=email, username=email, is_active=False)
        new_user.save()

        # create code
        registration = Registration(user=new_user, used=False)
        registration.save()

        #  send email
        send_mail(
            'Your motion registration code',
            f'Here is your registration code: {registration.code}',
            'tencindin@gmail.com',
            [f'{new_user.email}'],
            fail_silently=False,
        )
        return new_user


class RegistrationValidationSerializer(serializers.Serializer):

    code = serializers.CharField(label='security code')
    email = serializers.CharField(label='email')
    username = serializers.CharField(label='username')
    first_name = serializers.CharField()
    last_name = serializers.CharField(label='last name')
    password = serializers.CharField(label='password')
    password_repeat = serializers.CharField(label='password repeat')

    # Validate
    def validate(self, data):
        code = data.get('code')
        email = data.get('email')

        user = User.objects.get(
            email=email,
            registration__code=code,
            registration__used=False
        )

        if not user:
            raise ValidationError('Invalid verification code')

        password = data.get('password')
        password_repeat = data.get('password_repeat')

        if password != password_repeat:
            raise ValidationError('Passwords do not match.')

        return data

    # Save
    def save(self, validated_data):
        # - update user new information (username, password)
        user = User.objects.get(
            email=validated_data['email'],
            registration__code=validated_data['code'],
            registration__used=False
        )

        user.username = validated_data['username']
        user.first_name = validated_data['first_name']
        user.last_name = validated_data['last_name']
        user.is_active = True
        user.set_password(validated_data['password'])
        user.save()
        user.registration.used = True
        user.registration.save()
        return user


class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField(label='email for password reset',
                                   validators=[email_exists_validation])

    def save(self, validated_data):
        email = validated_data.get('email')
        existing_user = User.objects.get(email=email, is_active=True)

        # create code
        registration = Registration.objects.get(user=existing_user)
        registration.action = 'PW'
        registration.code = code_generator()
        registration.used = False
        registration.save()

        #  send email
        send_mail(
            'Your motion password reset code',
            f'Here is your password reset code: {registration.code}',
            'tencindin@gmail.com',
            [f'{existing_user.email}'],
            fail_silently=False,
        )

        return existing_user


# class ResetPasswordValidationSerializer():
#     pass
#