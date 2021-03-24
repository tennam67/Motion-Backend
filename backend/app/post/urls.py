from rest_framework.generics import RetrieveAPIView

from app.post.views import ListCreatePost, RetrieveUpdateDestroyPost, ListUserPosts
from django.urls import path

urlpatterns = [
    path('', ListCreatePost.as_view()),
    path('<int:post_id>/', RetrieveUpdateDestroyPost.as_view()),
    path('user/<int:user_id>/', ListUserPosts.as_view(), name='list-user-posts'),
]
