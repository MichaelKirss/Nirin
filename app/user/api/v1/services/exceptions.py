from __future__ import annotations


class PdppInvalidError(ValueError):
    """Ошибка регистрации при отсутствии согласия c передачей ПД"""


class UserExistsError(ValueError):
    """Ошибка при регистрации, если создается дубль пользователя"""
