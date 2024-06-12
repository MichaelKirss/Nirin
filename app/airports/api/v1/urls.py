from __future__ import annotations

from django.urls import path, include
from rest_framework.routers import DefaultRouter

from airports.api.v1.views import AirportsListView, ServicesListView, AirportSearchView, AirportDetailView

urlpatterns = [
    path('airports', AirportsListView.as_view()),
    path('services', ServicesListView.as_view()),
    path('search', AirportSearchView.as_view()),
    path('airports/<int:pk>', AirportDetailView.as_view()),
]
