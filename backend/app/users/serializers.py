from django.contrib.auth import get_user_model
from rest_framework import serializers
# from app.social.models import Post

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    pass
    # logged_in_user_is_following = serializers.SerializerMethodField()
    # amount_of_posts = serializers.SerializerMethodField()
    # amount_of_likes = serializers.SerializerMethodField()
    # amount_of_followers = serializers.SerializerMethodField()
    # amount_following = serializers.SerializerMethodField()

    # def get_logged_in_user_is_following(self, user):
    #     return user in self.context['request'].user.followees.all()
    #
    # def get_amount_of_posts(self, user):
    #     return Post.objects.filter(user=user).count()
    #
    # def get_amount_of_likes(self, user):
    #     return user.liked_posts.count()
    #
    # def get_amount_of_followers(self, user):
    #     return User.objects.filter(followees=user).count()
    #
    # def get_amount_following(self, user):
    #     return user.followees.count()

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'username', 'location', 'about_me']
        read_only_fields = ['email']

    # class Meta:
    #     model = User
    #     fields = ['id', 'email', 'first_name', 'last_name', 'username', 'location', 'about_me',
    #               'logged_in_user_is_following', 'amount_of_posts', 'amount_of_posts', 'amount_of_likes',
    #               'amount_of_followers', 'amount_following']
    #     read_only_fields = ['email']
