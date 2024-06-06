from __future__ import annotations

from django.urls import path, include
from rest_framework.routers import DefaultRouter

from user.api.v1.views import (
    PasswordResetAPIView,
    PasswordResetConfirmAPIView,
    SignupAPIView,
    UserAPIView,
    LoginAPIView,
    LoginRefreshAPIView,
)

urlpatterns = [
    path('', UserAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('login/refresh', LoginRefreshAPIView.as_view()),
    path('signup', SignupAPIView.as_view()),
    path('password-reset', PasswordResetAPIView.as_view()),
    path('password-reset/confirm', PasswordResetConfirmAPIView.as_view()),
]
