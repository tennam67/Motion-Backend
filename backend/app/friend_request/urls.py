from django.urls import path

from app.friend_request.views import CreateFriendRequestView

urlpatterns = [
    path('<int:pk>/', CreateFriendRequestView.as_view()),
]
