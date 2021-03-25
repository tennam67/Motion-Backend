from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated

from app.image.models import PostImage
from app.post.models import Post
from app.users.models import User
from app.post.permissions import IsOwnerOrReadOnly, IsNotOwner
from app.post.serializers import PostSerializer


# get and create posts and with image
class ListCreatePost(ListCreateAPIView):
    queryset = Post.objects.all().order_by('-created')
    serializer_class = PostSerializer

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        post = serializer.save(author=self.request.user)
        upload_img = request.FILES.getlist('post_images')
        for f in upload_img:
            image = PostImage(post=post, image=f)
            image.save()
        return Response(serializer.data)


# update and delete posts if you're the logged in user or admin
class RetrieveUpdateDestroyPost(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_url_kwarg = 'post_id'
    lookup_field = 'id'
    permission_classes = [IsOwnerOrReadOnly]


# get specific users posts
class ListSpecificUserPosts(ListAPIView):

    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.filter(author__id=self.kwargs['user_id']).order_by('-created')


# toggle like
class CreateLike(GenericAPIView):
    queryset = Post
    serializer_class = PostSerializer
    lookup_url_kwarg = 'post_id'
    #permission_classes = [IsNotOwner]

    def patch(self, request, *args, **kwargs):
        post = self.get_object()
        user = self.request.user
        user_liked_post = user in post.likers.all()
        if user_liked_post:
            post.likers.remove(user)
        else:
            post.likers.add(user)
        return Response(self.get_serializer(post).data)

#get all posts user likes
class GetLikedPostsByUser(ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        return self.request.user.liked_posts.all()

# get all posts of followed users
class GetFollowedUsersPosts(ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        followed_user_ids = self.request.user.followees.all().values_list("id", flat=True)
        posts = Post.objects.filter(author__in=followed_user_ids)
        return posts


