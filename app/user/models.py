from __future__ import annotations

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    pdpp_agreement = models.BooleanField('Согласие c обработкой ПД', default=True)
    mailings_agreement = models.BooleanField('Согласие на рассылки', default=False)

    def __str__(self):
        return self.username

    @property
    def full_name(self):
        return f'{self.last_name} {self.first_name}'
