from __future__ import annotations

from django.contrib.auth import get_user_model
from drf_spectacular.utils import extend_schema, extend_schema_view
from rest_framework import viewsets
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenRefreshView

from user.api.v1.serializers import (
    LoginSerializer,
    PasswordResetConfirmSerializer,
    PasswordResetSerializer,
    SignupSerializer,
    TokenSerializer,
    UserSerializer,
)
from user.api.v1.services.exceptions import PdppInvalidError, UserExistsError
from user.api.v1.services.login import authenticate_and_obtain_token
from user.api.v1.services.signup import SignupService

User = get_user_model()


class LoginAPIView(APIView):
    @extend_schema(
        request=LoginSerializer,
        responses={200: TokenSerializer()},
        summary='Авторизация пользователя',
        description='Авторизация пользователя по JWT-токену',
    )
    def post(self, request):
        # TODO JWT токен перевести в httpOnly cookie и обновлять токен авторизации на стороне бека

        token = authenticate_and_obtain_token(request)

        return Response(
            TokenSerializer(token).data,
            status=200,
        )


@extend_schema_view(
    post=extend_schema(
        summary='Обновление токена авторизации',
        description='Принимает refresh JWT и возвращает access JWT, если токен refresh действителен.',
    ),
)
class LoginRefreshAPIView(TokenRefreshView):
    pass


class SignupAPIView(APIView):
    http_method_names = ['post']

    @extend_schema(
        request=SignupSerializer,
        responses={
            200: TokenSerializer(),
        },
        summary='Регистрация пользователя',
        description="""
        Регистрирует пользователя, сохраняет всю информация в базу и отдает JWT-токен.
        Проверяет наличие дублирующихся записей по почте и проверяет наличие pdpp.
        """,
    )
    def post(self, request):
        ser = SignupSerializer(data=request.data)
        ser.is_valid(raise_exception=True)

        try:
            credentials = SignupService(**ser.data).run()
        except (UserExistsError, PdppInvalidError) as exc:
            raise ValidationError(exc.args[0]) from exc

        token = authenticate_and_obtain_token(
            request,
            **credentials.__dict__,
        )

        return Response(
            TokenSerializer(token).data,
            status=200,
        )


class PasswordResetAPIView(APIView):
    http_method_names = ['post']

    @extend_schema(
        request=PasswordResetSerializer,
        responses={
            200: {},
        },
        summary='Запрос на смену пароля пользователя',
        description='Принимает почту пользователя и отправляет письмо c ссылкой на c6poc пароля',
    )
    def post(self, request):
        return Response(data={'detail': 'Письмо c ссылкой для смены пароля отправлено на почту'}, status=200)


class PasswordResetConfirmAPIView(APIView):
    http_method_names = ['post']

    @extend_schema(
        request=PasswordResetConfirmSerializer,
        responses={
            200: {},
        },
        summary='Подтверждение смены пароля пользователя',
        description='Принимает токен безопасности и uid, a также пару паролей, new_password1 сохраняется в базе',
    )
    def post(self, request):
        return Response(data={'detail': 'Пароль был изменен на новый'})


class UserAPIView(APIView):
    http_method_names = ['get']
    permission_classes = (IsAuthenticated,)

    @extend_schema(
        request=UserSerializer,
        responses={
            200: UserSerializer(),
        },
        summary='Информация о пользователе',
        description="""
        Возвращает информацию о текущем пользователе
        """,
    )
    def get(self, request):
        print("User", request.user)
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
