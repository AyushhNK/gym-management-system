from django.shortcuts import render,HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import TrainerSerializer
from .models import Trainer

# Create your views here.
class TrainerView(APIView):
	def get(self,request):
		trainer=Trainer.objects.all()
		serializer=TrainerSerializer(trainer,many=True, context={'request': request})
		return Response(serializer.data)