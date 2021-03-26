from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Post(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    content = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='posts', null=True)
    likers = models.ManyToManyField(to=User, blank=True, related_name='liked_posts')

    def __str__(self):
        return f"{self.id}: {self.title}"
