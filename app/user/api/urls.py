from __future__ import annotations

from django.urls import include, path

urlpatterns = [
    path('v1/user/', include('user.api.v1.urls')),
]
