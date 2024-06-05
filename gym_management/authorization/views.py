from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User

# Create your views here.

def home(request):
	users=User.objects.all()
	return HttpResponse(users[0].is_staff)


