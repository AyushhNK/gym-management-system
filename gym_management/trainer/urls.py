from django.urls import path
from . import views



urlpatterns=[
	path('trainers',views.TrainerView.as_view(),name='Trainer'),
]