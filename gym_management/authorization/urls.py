from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from .views import SignupView,LoginView

router=DefaultRouter()


urlpatterns=[
	path('signup',SignupView.as_view(),name='signup'),
	path('login',LoginView.as_view(),name='login'),
]