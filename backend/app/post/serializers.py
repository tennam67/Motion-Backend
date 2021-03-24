from rest_framework import serializers

from app.post.models import Post
from app.users.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    # user = UserSerializer(read_only=True)
    author = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'
        # fields = ('id', 'title', 'content', 'created', 'updated', 'author')
