from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
User = get_user_model()


class FriendRequest(models.Model):
    status = models.CharField(max_length=32, choices=[
        ("p", "pending"),
        ("a", "accepted"),
        ("r", "rejected")
    ], )
    requester = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="requested")
    created = models.DateTimeField(auto_now_add=True)
