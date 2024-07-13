from rest_framework import serializers
from .models import GymClass,Booking

class GymClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = GymClass
        fields = "__all__"

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = "__all__"