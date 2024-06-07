from django.db import models


class KindService(models.TextChoices):
    TRANSFER = 'TRANSFER'
    BUSINES_LOUNGE = 'BUSINES_LOUNGE'
    PORTER = 'PORTER'
    CHILDREN = 'CHILDREN'
