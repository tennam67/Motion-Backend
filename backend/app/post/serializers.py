from rest_framework import serializers

from app.image.serializers import ImageSerializer
from app.post.models import Post
from app.users.serializers import UserSerializer, ShortUserDetailSerializer, UserLikedPostSerializer


class PostSerializer(serializers.ModelSerializer):
    # user = UserSerializer(read_only=True)
    author = UserSerializer(read_only=True)
    likers = UserLikedPostSerializer(read_only=True, many=True)
    post_images = ImageSerializer(many=True, required=False)
    total_likes = serializers.SerializerMethodField(read_only=True)

    def get_total_likes(self, instance):
        return instance.likers.count()

    class Meta:
        model = Post
        #fields = '__all__'
        fields = ('id', 'title', 'content', 'created', 'updated', 'author', 'likers', 'total_likes', 'post_images')
