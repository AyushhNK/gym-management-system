from django.urls import path
from .views import GymClassView,BookingView


urlpatterns=[
	path('class',GymClassView.as_view(),name='class'),
	path('booking',BookingView.as_view(),name='booking'),
]