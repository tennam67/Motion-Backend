from django.shortcuts import render

# Create your views here.
from rest_framework.generics import CreateAPIView

from app.comment.serializers import CommentSerializer


class PostCommentView(CreateAPIView):
    serializer_class = CommentSerializer
    pass
