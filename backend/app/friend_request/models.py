from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
User = get_user_model()


class FriendRequest(models.Model):
    status = models.CharField(max_length=32, choices=[
        ("pending", "pending"),
        ("accepted", "accepted"),
        ("rejected", "rejected")
    ], default='pending')
    from_user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="friendship_requests_sent", blank=True, null=True)
    to_user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='friendship_requests_received', blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Request from {self.from_user} to {self.to_user} > status : {self.status}"
