from rest_framework import serializers

from app.image.models import PostImage


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = PostImage
        fields = '__all__'