from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from app.registration.views import RegistrationView, ValidationView, ResetPasswordView, ResetPasswordValidationView

app_name = 'registration'

urlpatterns = [
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
    path('registration/', RegistrationView.as_view()),
    path('registration/validation/', ValidationView.as_view()),
    path('password-reset/', ResetPasswordView.as_view()),
    path('password-reset/validation/', ResetPasswordValidationView.as_view()),
]
