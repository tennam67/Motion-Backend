from rest_framework import serializers

from app.image.serializers import ImageSerializer
from app.post.models import Post
from app.users.serializers import UserSerializer, ShortUserDetailSerializer, UserLikedPostSerializer


class PostSerializer(serializers.ModelSerializer):
    # user = UserSerializer(read_only=True)
    author = UserSerializer(read_only=True)
    likers = UserLikedPostSerializer(read_only=True, many=True)
    post_images = ImageSerializer(many=True, required=False)

    class Meta:
        model = Post
        fields = '__all__'
        # fields = ('id', 'title', 'content', 'created', 'updated', 'author')
