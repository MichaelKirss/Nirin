from __future__ import annotations

from rest_framework import exceptions, generics, viewsets
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from airports.models import Airport, Services

from airports.api.v1.serializers import (AirportsSerializer, ServicesSerializer)


class AirportsListView(generics.ListAPIView):
    queryset = Airport.objects.all().order_by('title')
    serializer_class = AirportsSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        return Airport.objects.all()


class ServicesListView(generics.ListAPIView):
    queryset = Services.objects.all().order_by('title')
    serializer_class = ServicesSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        return Services.objects.all()

