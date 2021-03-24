from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated

from app.post.models import Post
from app.post.permissions import IsOwnerOrReadOnly
from app.post.serializers import PostSerializer


class ListCreatePost(ListCreateAPIView):
    queryset = Post.objects.all().order_by('-created')
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class RetrieveUpdateDestroyPost(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_url_kwarg = 'post_id'
    lookup_field = 'id'
    permission_classes = [IsOwnerOrReadOnly]


class ListUserPosts(ListAPIView):
    serializer_class = PostSerializer
    lookup_url_kwarg = 'user_id'

    # def get_queryset(self):
    #     user_id = self.kwargs.get("user_id")
    #     return Post.objects.filter(user__id=user_id).order_by("-created")

