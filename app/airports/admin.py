from __future__ import annotations

from django.contrib import admin

from airports.models import Airport, Services


@admin.register(Airport)
class ProductAdmin(admin.ModelAdmin):
    pass


@admin.register(Services)
class CategoryAdmin(admin.ModelAdmin):
    pass
