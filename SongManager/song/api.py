from song.models import Song
from rest_framework import viewsets,permissions
from .serializers import Songserialize


class Songviewset(viewsets.ModelViewSet):
    
    permission_classes=[
        permissions.IsAuthenticated
    ]
    serializer_class=Songserialize

    def get_queryset(self):
        return self.request.user.Songs.all()
    
    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)


