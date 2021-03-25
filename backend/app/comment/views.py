from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from app.comment.models import Comment
from app.comment.serializers import CommentSerializer
from app.post.models import Post


class PostCommentView(ListCreateAPIView):
    """
    List all Comments
    """
    serializer_class = CommentSerializer

    # queryset = Comment.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        post = Post.objects.get(id=self.kwargs['post_id'])
        serializer.save(author=request.user, post=post)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def get_queryset(self):
        return Comment.objects.filter(post=self.kwargs['post_id'])


# class CommentListByUser(ListAPIView):
#     serializer_class = CommentSerializer
#
#     def get_queryset(self):
#         return Comment.objects.filter(user=self.request.user.id)

# class CommentDetail(RetrieveUpdateDestroyAPIView):
#     """
#     Show / Update / Delete one Comment
#     """
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer
#     permission_classes = [IsAuthenticated]
