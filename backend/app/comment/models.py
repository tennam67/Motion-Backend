from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
from app.post.models import Post

User = get_user_model()


class Comment(models.Model):
    content = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE, related_name="post_comments", null=True, blank=True)
    author = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="author_comments", null=True, blank=True)
