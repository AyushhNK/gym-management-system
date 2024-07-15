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
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
