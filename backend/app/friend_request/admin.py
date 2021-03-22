from django.contrib import admin

# Register your models here.
from app.friend_request.models import FriendRequest

admin.site.register(FriendRequest)