from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()


class Comment(models.Model):
    content = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    # post = models.ForeignKey(to=Post, on_delete=models.CASCADE, related_name="comments")
    author = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="comments")
