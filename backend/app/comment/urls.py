from django.urls import path

from app.comment.views import PostCommentView

urlpatterns = [
    path('', PostCommentView.as_view()),
]
