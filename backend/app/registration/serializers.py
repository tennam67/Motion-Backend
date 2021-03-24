from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.core.mail import send_mail
from rest_framework import serializers

from app.registration.models import Registration

User = get_user_model()


def email_validation(email):
    try:
        User.objects.get(email=email)
        raise ValidationError(message='email already taken')
    except User.DoesNotExist:
        return email


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
            f'Here is your code: {registration.code}',
            'tencindin@gmail.com',
            [f'{new_user.email}'],
            fail_silently=False,
        )
        return new_user


class RegistrationValidationSerializer(serializers.Serializer):
    # Validate
    def validate(self, data):
        code = data.get('code')
        email = data.get('email')
        user = User.objects.get(email=email, registration__code=code)

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
        user = User(
            email=validated_data['email'],
            code=validated_data['code'],
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

        # - update the registration


# class ResetPasswordSerializer():
#     pass
#
#
# class ResetPasswordValidationSerializer():
#     pass
