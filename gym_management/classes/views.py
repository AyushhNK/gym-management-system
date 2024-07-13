from django.shortcuts import render
from django.http import HttpResponse
from .models import GymClass,Booking
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import GymClassSerializer,BookingSerializer
# Create your views here.

class GymClassView(APIView):
	def get(self,request):
		classes=GymClass.objects.all()
		serializer=GymClassSerializer(classes,many=True)
		return Response(serializer.data)
	def post(self,request):
		return Response({"message":"class post"})




class BookingView(APIView):
	def get(self,request):
		booking=Booking.objects.all()
		serializer=BookingSerializer(booking,many=True)
		return Response(serializer.data)

	def post(self,request):
		return Response({"message":"book post"})
