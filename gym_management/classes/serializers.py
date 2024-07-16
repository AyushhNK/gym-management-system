from rest_framework import serializers
from .models import GymClass, Booking

class GymClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = GymClass
        fields = "__all__"

class BookingSerializer(serializers.ModelSerializer):
    gym_class_name = serializers.CharField(source='gym_class.name', read_only=True)
    start_time = serializers.DateTimeField(source='gym_class.start_time',read_only=True)
    end_time = serializers.DateTimeField(source='gym_class.end_time',read_only=True)

    class Meta:
        model = Booking
        fields = "__all__"
        extra_fields = ['gym_class_name']
