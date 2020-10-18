from rest_framework import routers

from .api import Songviewset

router=routers.DefaultRouter()
router.register("api/songs",Songviewset,"Songs")

urlpatterns=router.urls
