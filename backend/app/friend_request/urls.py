from django.urls import path

from app.friend_request.views import CreateFriendRequestView, GetListOfFriends, GetUpdateDeleteFriendRequestView

urlpatterns = [
    path('friends/request/<int:user_id>/', CreateFriendRequestView.as_view()),
    path('friends/', GetListOfFriends.as_view()),
    path('friends/requests/<int:pk>/', GetUpdateDeleteFriendRequestView.as_view()),
]
