from __future__ import annotations

from django.contrib.auth import get_user_model
from rest_framework.request import Request

from user.api.v1.serializers import EmailTokenObtainPairSerializer, LoginSerializer
from user.api.v1.services.transfers import ExpectedCredentials

User = get_user_model()


def authenticate_and_obtain_token(
    request: Request,
    **credentials: ExpectedCredentials,
):
    """
    Авторизация пользователя на платформе
    """
    ser = LoginSerializer(data=request.data)
    ser.is_valid(raise_exception=True)
    token_ser = EmailTokenObtainPairSerializer()
    token = token_ser.validate(attrs=ser.validated_data)
    return token
