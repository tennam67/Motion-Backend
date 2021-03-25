from django.urls import path

from app.comment.views import PostCommentView

urlpatterns = [
    path('comments/<int:post_id>/', PostCommentView.as_view()),
]

