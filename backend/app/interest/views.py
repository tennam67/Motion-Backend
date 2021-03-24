from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from app.interest.models import Interest
from app.interest.serializers import InterestSerializer


class GetCreateInterestView(ListCreateAPIView):
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class GetUpdateDeleteInterestView(RetrieveUpdateDestroyAPIView):
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer
    permission_classes = [IsAuthenticated]
