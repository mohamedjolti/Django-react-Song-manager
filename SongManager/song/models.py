from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Song(models.Model):
    name=models.CharField( max_length=50)
    create_at=models.DateTimeField(auto_now_add=True)
    owner=models.ForeignKey(User,on_delete=models.CASCADE,related_name="Songs",null=True)
    categorie=models.CharField(max_length=50,null=True)

