from django.shortcuts import render
from itsdangerous import Serializer
from .models import *
from .serializers import *
from ast import And
from cgitb import lookup
from lib2to3.pgen2.token import EQUAL
from pickletools import float8
from urllib import request
from django.shortcuts import reverse ,redirect, render
from django.views.generic import *
from .models import *
from django.http import HttpResponseRedirect
from rest_framework.decorators import api_view
from django.db.models import Q, query
from rest_framework import generics, mixins
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from io import BytesIO
from django.core.files import File
from PIL import Image, ImageDraw
from rest_framework import status
import base64
from rest_framework.views import APIView


class ReactTest(generics.ListCreateAPIView):
    serializer_class = ReactSerializer
    permission_classes = [AllowAny]
    queryset = ToDo.objects.all()

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=200)

class ReactCRUDE(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'id'
    serializer_class = ReactSerializer
    permission_classes = [AllowAny]
    # queryset = ToDo.objects.all()

    def get_queryset(self):
        pk = self.kwargs['id']
        print(pk)
        return ToDo.objects.all()

    def get_serializer_context(self, *args, **kwargs):
        return {"request": self.request}

# Create your views here.
