from song.models import Song
from rest_framework import viewsets,permissions
from .serializers import Songserialize


class Songviewset(viewsets.ModelViewSet):
    queryset=Song.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=Songserialize
