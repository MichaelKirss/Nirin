from __future__ import annotations

from rest_framework import exceptions, generics, viewsets, filters, status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from airports.models import Airport, Services, Cart, CartItem
from django.db.models import Sum


from airports.api.v1.serializers import (
    AirportsSerializer,
    ServicesSerializer,
    AirportSearchSerializer,
    AirportDetailSerializer,
    CartItemSerializer,
)


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


class AirportSearchView(generics.ListAPIView):
    queryset = Airport.objects.all()
    serializer_class = AirportSearchSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^title', '^code_iata', '^code_icao', '^city', '^country']


class AirportDetailView(generics.RetrieveAPIView):
    queryset = Airport.objects.all()
    serializer_class = AirportDetailSerializer


class AddServiceAPIView(APIView):
    http_method_names = ['post']
    serializer_class = CartItemSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = CartItemSerializer(data=request.data)
        if serializer.is_valid():
            service_id = serializer.validated_data.get('service_id')

            cart, created = Cart.objects.get_or_create(user=request.user)
            cart.save()

            cart_item, created = CartItem.objects.get_or_create(cart=cart, service_id=service_id, defaults={'quantity': 1})

            if not created:
                cart_item.quantity += 1
                cart_item.save()

            cart.save()

            total_price = CartItem.objects.filter(cart=cart).aggregate(total_price=Sum('service__price'))[
                              'total_price']

            cart.total_price = total_price
            cart.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RemoveServiceAPIView(APIView):
    http_method_names = ['delete']
    permission_classes = (IsAuthenticated,)

    def delete(self, request, *args, **kwargs):
        service_id = kwargs.get('service_id')
        try:
            cart_items = CartItem.objects.filter(service_id=service_id, cart__user=request.user)
            if not cart_items.exists():
                return Response({"error": "Нет таких продуктов в корзине"}, status=status.HTTP_404_NOT_FOUND)

            cart_items.delete()

            for cart in Cart.objects.filter(user=request.user):
                total_price = CartItem.objects.filter(cart=cart).aggregate(total_price=Sum('service__price')
                                                                           )['total_price'] or 0
                cart.total_price = total_price
                cart.save()

            return Response({"message": "Продукт успешно удален"}, status=status.HTTP_200_OK)
        except CartItem.DoesNotExist:
            return Response({"error": "Нет таких продуктов в корзине"}, status=status.HTTP_404_NOT_FOUND)