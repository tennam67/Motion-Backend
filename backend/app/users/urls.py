# from django.urls import path
#
# from app.users.views import ListUsers
#
# urlpatterns = [
#     path('', ListUsers.as_view(), name='list-users'),
# ]

from django.urls import path

from app.users.views import UserFollowUnFollowToggle, GetAllUserView, GetUserUpdateDeleteView, GetSpecificUserView, \
    GetUserFollowingView, GetUserFollowerView, UrlUserSearchView

urlpatterns = [
    path('', GetAllUserView.as_view()),
    path('me/', GetUserUpdateDeleteView.as_view()),
    path('<int:pk>/', GetSpecificUserView.as_view()),
    path('followers/following/', GetUserFollowingView.as_view()),
    path('followers/followers/', GetUserFollowerView.as_view()),
    path('followers/toggle-follow/<int:user_id>/', UserFollowUnFollowToggle.as_view()),
    path('?search=<str:search_string>/', UrlUserSearchView.as_view()),
]

