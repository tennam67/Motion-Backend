from django.db import models

from app.post.models import Post


def user_directory_path(instance, filename):
    return f"user_{instance.post.author.id}/{filename}"


# Create your models here.
class PostImage(models.Model):
    image = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE, related_name="post_images", null=True, blank=True)
