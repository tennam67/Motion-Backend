from django.contrib.auth import get_user_model
from rest_framework import serializers

# from app.social.models import Post

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
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
                  'followers']

        ordering = ['id']


class ShortUserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id',
                  'email',
                  'first_name',
                  'last_name',
                  'username']

        ordering = ['id']
