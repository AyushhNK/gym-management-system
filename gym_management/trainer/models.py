from django.db import models

class Trainer(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    address = models.TextField()
    certifications = models.TextField(help_text="List of certifications")
    experience_years = models.IntegerField(help_text="Number of years of experience")
    specialties = models.TextField(help_text="Areas of specialty, e.g., weightlifting, yoga")
    bio = models.TextField(help_text="Short biography of the trainer")
    profile_picture = models.ImageField(upload_to='trainer_pics/', null=True, blank=True)
    available = models.BooleanField(default=True, help_text="Is the trainer currently available for training?")

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

