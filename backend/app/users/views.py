from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from app.users.admin import User
from app.users.serializers import UserSerializer, ShortUserDetailSerializer


# User view  - get all
class GetAllUserView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = ShortUserDetailSerializer
    permission_classes = []

    # def get(self, request, *args, **kwargs):
    #     keyword = request.query_params.get("search")
    #     users = self.queryset.filter(username=keyword)
    #     serializer = self.get_serializer(users, many=True)
    #     return Response(serializer.data)

    # def get_queryset(self):
    #     queryset = User.objects.all()
    #     username = self.request.query_params.get('search', None)
    #     if username is not None:
    #         queryset = queryset.filter(username=username)
    #     return queryset


class UrlUserSearchView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = ShortUserDetailSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        keyword = request.query_params.get("search")
        users = self.queryset.filter(username=keyword)
        serializer = self.get_serializer(users, many=True)
        return Response(serializer.data)


#  Get specific user details
class GetSpecificUserView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# logged User view  - get, update, create and delete
class GetUserUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    # queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


# User following view  - get and create
class GetUserFollowingView(ListCreateAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user.followees


# User follower view  - get and create
class GetUserFollowerView(ListCreateAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user.followers


#  toggle follow/unfollow a user
class UserFollowUnFollowToggle(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'user_id'

    def post(self, request, **kwargs):
        user_to_follow_unfollow = self.get_object()
        user = request.user
        user.followees.remove(
            user_to_follow_unfollow) if user_to_follow_unfollow in user.followees.all() else user.followees.add(
            user_to_follow_unfollow)
        return Response(self.get_serializer(instance=user_to_follow_unfollow).data)
