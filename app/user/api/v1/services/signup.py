from __future__ import annotations

from django.contrib.auth import get_user_model

from user.api.v1.services.exceptions import PdppInvalidError, UserExistsError
from user.api.v1.services.transfers import ExpectedCredentials

User = get_user_model()


class SignupService:
    _first_name: str
    _last_name: str
    _email: str
    _password: str
    _pdpp_agreement: bool
    _mailings_agreement: bool

    def __init__(self, first_name, last_name, email, password, pdpp_agreement, mailings_agreement) -> None:
        self._first_name = first_name
        self._last_name = last_name
        self._email = email
        self._password = password
        self._pdpp_agreement = pdpp_agreement
        self._mailings_agreement = mailings_agreement

    def _validate_pdpp(self) -> None:
        if not self._pdpp_agreement:
            raise PdppInvalidError({'pdpp_agreement': 'Необходимо дать согласие на обработку персональных данных'})

    def _validate_email(self) -> None:
        if User.objects.filter(email=self._email).exists():
            raise UserExistsError({'email': 'Пользователь c такой почтой уже существует'})

    def _validate(self) -> None:
        self._validate_pdpp()
        self._validate_email()

    def _create_user(self):
        return User.objects.create_user(
            first_name=self._first_name,
            last_name=self._last_name,
            username=self._email,
            email=self._email,
            password=self._password,
            pdpp_agreement=self._pdpp_agreement,
            mailings_agreement=self._mailings_agreement,
        )

    def run(self) -> ExpectedCredentials:
        self._validate()
        self._create_user()
        return ExpectedCredentials(self._email, self._password)
