from pyexpat import model
from django.db.models import fields
from .models import *
from rest_framework import serializers
from django.conf import settings
from .views import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = '__all__'