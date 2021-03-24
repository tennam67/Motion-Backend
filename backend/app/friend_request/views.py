from django.contrib.auth import get_user_model
# from django.shortcuts import render
# Create your views here.
from rest_framework import status
from rest_framework.generics import RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from app.friend_request.models import FriendRequest
from app.friend_request.serializers import FriendRequestSerializer

User = get_user_model()


class CreateFriendRequestView(CreateAPIView):
    serializer_class = FriendRequestSerializer

    def create(self, request, *args, **kwargs):
        other_user = User.objects.get(id=self.kwargs['pk'])
        if other_user == self.request.user:
            return Response({"you can't send request to self."},
                            status=status.HTTP_409_CONFLICT)
        # creating new object of the type friend request
        new_friend_request = FriendRequest(from_user=request.user, to_user=other_user)
        # saving it to the database
        new_friend_request.save()
        return Response(self.get_serializer(new_friend_request).data)


class GetUpdateDeleteFriendRequestView(RetrieveUpdateDestroyAPIView):
    serializer_class = FriendRequestSerializer
    queryset = FriendRequest.objects.all()
    permission_classes = [IsAuthenticated]
    #
    # def update(self, request, *args, **kwargs):
    #
    #     if request.data['status'] == 'accepted':


