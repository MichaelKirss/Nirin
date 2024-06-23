from __future__ import annotations

from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from airports.models import Airport, Services, Cart, CartItem

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


class AirportSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airport
        fields = '__all__'


class AirportDetailSerializer(serializers.ModelSerializer):
    services = serializers.SerializerMethodField()

    class Meta:
        model = Airport
        fields = ('id', 'title', 'code_iata', 'code_icao', 'city', 'country', 'services')

    def get_services(self, obj):
        services = Services.objects.filter(airport=obj)
        return ServicesSerializer(services, many=True).data


class CartItemSerializer(serializers.ModelSerializer):
    service_id = serializers.IntegerField()

    class Meta:
        model = CartItem
        fields = ['id', 'service_id']
