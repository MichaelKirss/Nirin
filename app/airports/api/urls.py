from __future__ import annotations

from django.urls import include, path

urlpatterns = [
    path('v1/airports/', include('airports.api.v1.urls'))
]
