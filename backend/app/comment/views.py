from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListCreateAPIView

from app.comment.models import Comment
from app.comment.serializers import CommentSerializer


class PostCommentView(ListCreateAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
