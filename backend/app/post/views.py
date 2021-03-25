from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated

from app.post.models import Post
from app.post.permissions import IsOwnerOrReadOnly, IsNotOwner
from app.post.serializers import PostSerializer


# get and create posts
class ListCreatePost(ListCreateAPIView):
    queryset = Post.objects.all().order_by('-created')
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# update and delete posts if you're the logged in user or admin
class RetrieveUpdateDestroyPost(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_url_kwarg = 'post_id'
    lookup_field = 'id'
    permission_classes = [IsOwnerOrReadOnly]


# doesnt work yet, get specific users posts
class ListSpecificUserPosts(ListAPIView):
    # queryset = Post.objects.all().order_by('-created')
    serializer_class = PostSerializer
    # lookup_url_kwarg = 'user_id'
    # lookup_field = 'id'

    def get_queryset(self):
        return Post.objects.filter(author__id=self.kwargs['user_id'])


# toggle like
class CreateLike(GenericAPIView):
    queryset = Post
    serializer_class = PostSerializer
    lookup_url_kwarg = 'post_id'

    def patch(self, request, *args, **kwargs):
        post = self.get_object()
        user = self.request.user
        user_liked_post = user in post.likers.all()
        if user_liked_post:
            post.likers.remove(user)
        else:
            post.likers.add(user)
        return Response(self.get_serializer(post).data)

