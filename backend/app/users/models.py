from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models


# from app.friend_request.models import FriendRequest
from app.friend_request.models import FriendRequest


def user_directory_path(instance, filename):
    return f"user_{instance.id}/{filename}"


class User(AbstractUser):
    # Field used for authentication
    USERNAME_FIELD = 'email'

    # Additional fields required when using createsuperuser (USERNAME_FIELD and passwords are always required)
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    username = models.CharField(max_length=200, unique=True)
    first_name = models.CharField(max_length=200, blank=True)
    last_name = models.CharField(max_length=200, blank=True)
    is_staff = models.BooleanField(default=False, help_text='Designates whether the user can log into this site.')
    is_active = models.BooleanField(default=True,
                                    help_text='Designates whether this user should be treated as active.'
                                              'Unselect this instead of deleting accounts.')
    date_joined = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=200, blank=True)
    about_me = models.CharField(max_length=1000, blank=True)
    job = models.CharField(max_length=200, blank=True)
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    followees = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='followers', blank=True,
                                       symmetrical=False)

    def __str__(self):
        return self.username

    def get_full_name(self):
        return self.username

    def get_short_name(self):
        return self.username

    @property
    def friends(self):
        friends_list = []
        friendships_requested = FriendRequest.objects.filter(
            status="accepted",
            from_user=self)
        friendships_received = FriendRequest.objects.filter(
            to_user=self,
            status='accepted')
        for friend in friendships_requested:
            friends_list.append(friend.to_user)
        for friend in friendships_received:
            friends_list.append(friend.from_user)
        return friends_list
