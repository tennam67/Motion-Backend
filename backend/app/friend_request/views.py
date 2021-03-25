from django.contrib.auth import get_user_model
# from django.shortcuts import render
# Create your views here.
from rest_framework import status
from rest_framework.generics import RetrieveUpdateDestroyAPIView, CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from app.friend_request.models import FriendRequest
from app.friend_request.serializers import FriendRequestSerializer
from app.users.serializers import UserSerializer

User = get_user_model()


class CreateFriendRequestView(CreateAPIView):
    serializer_class = FriendRequestSerializer

    def create(self, request, *args, **kwargs):
        other_user = User.objects.get(id=self.kwargs['user_id'])
        if other_user == self.request.user:
            return Response({"you can't send request to self."},
                            status=status.HTTP_409_CONFLICT)
        # creating new object of the type friend request
        new_friend_request = FriendRequest(from_user=request.user, to_user=other_user)
        # saving it to the database
        new_friend_request.save()
        return Response(self.get_serializer(new_friend_request).data)


class GetListOfFriends(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    # queryset = User.objects.all()

    # def filter_queryset(self, queryset):
    #     return self.request.user.friends

# user app model property decorator of friends is similar to the code below
    def get_queryset(self):
        list_friends = []
        user = self.request.user
        friendships_requested = FriendRequest.objects.filter(from_user=user, status='accepted')
        friendships_received = FriendRequest.objects.filter(to_user=user, status='accepted')
        for friend in friendships_requested:
            list_friends.append(friend.to_user)
        for friend in friendships_received:
            list_friends.append(friend.from_user)
        return list_friends


class GetUpdateDeleteFriendRequestView(RetrieveUpdateDestroyAPIView):
    serializer_class = FriendRequestSerializer
    queryset = FriendRequest.objects.all()
    permission_classes = [IsAuthenticated]

    # def update(self, request, *args, **kwargs):
    #     if FriendRequest.objects.filter(status='pending'):
    #         accept_request = FriendRequest(from_user=request.user, status='accepted')
    #         accept_request.save()

