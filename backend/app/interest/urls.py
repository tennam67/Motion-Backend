from django.urls import path

from app.interest.views import GetCreateInterestView, GetUpdateDeleteInterestView

urlpatterns = [
    path('', GetCreateInterestView.as_view()),
    path('<int:pk>/', GetUpdateDeleteInterestView.as_view())
]