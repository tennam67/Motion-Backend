from rest_framework.generics import RetrieveAPIView

from app.post.views import ListCreatePost, RetrieveUpdateDestroyPost, CreateLike, ListSpecificUserPosts
from django.urls import path

urlpatterns = [
    path('', ListCreatePost.as_view()),
    path('<int:post_id>/', RetrieveUpdateDestroyPost.as_view()),
    path('user/<int:user_id>/', ListSpecificUserPosts.as_view(), name='list-user-posts'),
    path('like-post/<int:post_id>/', CreateLike.as_view(), name='toggle-like'),
]
