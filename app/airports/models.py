from __future__ import annotations

from django.db import models
from airports import enums


class Airport(models.Model):
    title = models.CharField('Название аэропорта', max_length=64)
    code_iata = models.CharField('код ИАТА', max_length=3)
    code_icao = models.CharField('код ИКАО', max_length=4)
    city = models.CharField('Город', max_length=64)
    country = models.CharField('Страна', max_length=64)

    class Meta:
        verbose_name = 'Аэропорт'
        verbose_name_plural = 'Аэропорты'

    def __str__(self):
        return self.title


class Services(models.Model):
    title = models.CharField('Название', max_length=256)
    description = models.TextField('Описание', blank=True)
    kind_service = models.CharField(max_length=18, choices=enums.KindService.choices)
    price = models.PositiveSmallIntegerField('Цена', default=0)
    airport = models.ForeignKey('Airport', on_delete=models.CASCADE, verbose_name='Аэропорт', null=True, blank=True)

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'

    def __str__(self):
        return self.title
