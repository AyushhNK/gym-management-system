from django.db import models
from authorization.models import User

class GymClass(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    instructor = models.CharField(max_length=100)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    capacity = models.IntegerField()

    def __str__(self):
        return self.name

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    gym_class = models.ForeignKey(GymClass, on_delete=models.CASCADE)
    booked_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['user', 'gym_class']

    def __str__(self):
        return f"{self.user.Username} - {self.gym_class.name}"
