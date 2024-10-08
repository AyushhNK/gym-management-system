from django.db import models

class User(models.Model):
    User_Id = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=20, unique=True)
    Password = models.CharField(max_length=20)
    profile_picture = models.ImageField(upload_to='profile_pictures/', default='profile_pictures/default.jpg')

    def __str__(self):
        return self.Username


