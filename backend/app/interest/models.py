from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
User = get_user_model()


class Interest(models.Model):
    interest = models.CharField(max_length=90, blank=False)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="things_user_like", null=True, blank=True)
