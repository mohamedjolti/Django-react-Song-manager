from django.db import models

# Create your models here.

class Song(models.Model):
    name=models.CharField( max_length=50)
    create_at=models.DateTimeField(auto_now_add=True)
    

