from django.contrib.auth import get_user_model
from rest_framework import serializers

# from app.social.models import Post
from app.interest.models import Interest
from app.interest.serializers import InterestSerializer

User = get_user_model()


class UserLikedPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']


class ShortUserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id',
                  'email',
                  'first_name',
                  'last_name',
                  'username']

        ordering = ['id']


class UserSerializer(serializers.ModelSerializer):
    # things_user_like = InterestSerializer(many=True)
    hobby = serializers.SerializerMethodField()
    followees = ShortUserDetailSerializer(many=True, read_only=True)
    followers = ShortUserDetailSerializer(many=True, read_only=True)

    def get_hobby(self, instance):
        hobbies = []
        things_user_like = Interest.objects.filter(user=instance).values()
        for hobby in things_user_like:
            hobbies.append(hobby['interest'])
        return hobbies

    class Meta:
        model = User
        fields = ['id',
                  'email',
                  'first_name',
                  'last_name',
                  'username',
                  'location',
                  'about_me',
                  'followees',
                  'followers',
                  'hobby']

        ordering = ['id']
