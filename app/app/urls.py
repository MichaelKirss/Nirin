from __future__ import annotations

from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
)
from rest_framework.versioning import URLPathVersioning

app_urls = [
    path('', include('user.api.urls')),
    path('', include('airports.api.urls'))
]

api_urls = [
    path('api/', include(app_urls)),
]

swagger_urls = [
    path('schema/v1/', SpectacularAPIView.as_view(
        versioning_class=URLPathVersioning,
        api_version='v1',
        patterns=api_urls,
    ), name='schema'),
    path('swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]

urlpatterns = [
    path('', include(swagger_urls)),
    path('', include(api_urls)),
    path('admin/', admin.site.urls),
]