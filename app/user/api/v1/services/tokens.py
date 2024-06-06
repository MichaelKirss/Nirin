from __future__ import annotations

from rest_framework_simplejwt.tokens import RefreshToken


class FilledRefreshToken(RefreshToken):
    @classmethod
    def for_user(cls, user) -> RefreshToken:
        token: RefreshToken = super().for_user(user)
        token['username'] = user.username
        token['email'] = user.email
        token['role'] = user.role

        return token
