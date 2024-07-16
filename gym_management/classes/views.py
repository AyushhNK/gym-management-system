from django.shortcuts import render
from django.http import HttpResponse
from .models import GymClass, Booking
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import GymClassSerializer, BookingSerializer

# Create your views here.

class GymClassView(APIView):
    def get(self, request):
        classes = GymClass.objects.all()
        serializer = GymClassSerializer(classes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = GymClassSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookingView(APIView):
    def get(self, request):
        bookings = Booking.objects.all()
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BookingSerializer(data=request.data)
        
        if serializer.is_valid():
            gym_class_id = serializer.validated_data['gym_class'].id
            try:
                gym_class = GymClass.objects.select_for_update().get(id=gym_class_id)
                if gym_class.capacity > 0:
                    gym_class.capacity -= 1
                    gym_class.save()
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    return Response({'error': 'Gym class is already fully booked.'}, status=status.HTTP_400_BAD_REQUEST)
            except GymClass.DoesNotExist:
                return Response({'error': 'Gym class not found.'}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, booking_id):
        try:
            booking = Booking.objects.get(id=booking_id)
            booking.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Booking.DoesNotExist:
            return Response({'error': 'Booking not found'}, status=status.HTTP_404_NOT_FOUND)
