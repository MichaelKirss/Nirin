from __future__ import annotations

from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from airports.models import Airport, Services

from airports.models import Services


class AirportsSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField()
    code_iata = serializers.CharField()
    code_icao = serializers.CharField()
    city = serializers.CharField()
    country = serializers.CharField()


class ServicesSerializer(ModelSerializer):
    class Meta:
        model = Services
        fields = ('id', 'title',  'description', 'kind_service', 'price', 'airport')
