from __future__ import annotations

from django.contrib import admin

from airports.models import Airport, Services, Cart, CartItem


@admin.register(Airport)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'city', 'country')


@admin.register(Services)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'kind_service', 'price', 'airport')


@admin.register(Cart)
class Cart(admin.ModelAdmin):
    pass


@admin.register(CartItem)
class CartItem(admin.ModelAdmin):
    pass
