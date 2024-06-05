from django.db import models

class User_Type(models.Model):
    Type_Id = models.AutoField(primary_key=True)
    User_Type = models.CharField(max_length=20)

    def __str__(self):
        return self.User_Type

class User_Master(models.Model):
    GENDER_CHOICES = (
        ("M", "Male"),
        ("F", "Female"),
    )
    
    User_Id = models.AutoField(primary_key=True)
    Type_Id = models.ForeignKey(User_Type, on_delete=models.CASCADE)
    User_Name = models.CharField(max_length=20)
    Gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    Email = models.EmailField()
    Password = models.CharField(max_length=20)
    Address = models.CharField(max_length=100)
    Mobile = models.CharField(max_length=10)
    Photo = models.ImageField(upload_to="Profile_Pictures/")

    def __str__(self):
        return self.User_Name
