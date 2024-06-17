from django.db import models


class KindService(models.TextChoices):
    TRANSFER = 'MEET & ASSIST'
    FULLVIP = 'FULL VIP'
    FASTTRACK = 'FAST TRACK'