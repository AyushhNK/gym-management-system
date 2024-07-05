from django.shortcuts import render
from django.http import HttpResponse
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
# Create your views here.

class SignupView(APIView):
	def post(self,request):
		username=request.data.get('username')
		password=request.data.get('password')
		user=User.objects.create(Username=username,Password=password)
		user.save()
		return Response({"message":"sucessfully create user"})

class LoginView(APIView):
	def post(self,request):
		username=request.data.get('username')
		user=User.objects.get(Username=username)
		serializer=UserSerializer(user)
		return Response(serializer.data)



