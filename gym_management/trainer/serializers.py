from rest_framework import serializers
from rest_framework import serializers
from .models import Trainer

class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'

    def get_profile_picture_url(self, obj):
        request = self.context.get('request')
        if obj.profile_picture:
            return request.build_absolute_uri(obj.profile_picture.url)
        return None
