from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from app.registration.serializers import RegistrationSerializer, RegistrationValidationSerializer

User = get_user_model()


class RegistrationView(GenericAPIView):
    serializer_class = RegistrationSerializer
    permission_classes = []

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)
        return Response(status=status.HTTP_201_CREATED)


class ValidationView(GenericAPIView):
    serializer_class = RegistrationValidationSerializer
    permission_classes = []

    def patch(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)
        return Response(status=status.HTTP_201_CREATED)


# class ResetPasswordView(GenericAPIView):
#     serializer_class = ResetPasswordSerializer
#     permission_classes = []
#
#     def post(self, request):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save(serializer.validated_data)
#         return Response(status=status.HTTP_201_CREATED)
#
#
# class ResetPasswordValidationView(GenericAPIView):
#     serializer_class = ResetPasswordValidationSerializer
#     permission_classes = []
#
#     def patch(self, request):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save(serializer.validated_data)
#         return Response(status=status.HTTP_201_CREATED)
