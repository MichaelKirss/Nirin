from __future__ import annotations

from django.contrib import admin

from airports.models import Airport, Services


@admin.register(Airport)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'city', 'country')


@admin.register(Services)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'kind_service', 'price', 'airport')
