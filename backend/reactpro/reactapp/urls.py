from django.urls import path
from .views import * 
from django.contrib.sitemaps.views import sitemap
from . import views

app_name = 'reactapp'
urlpatterns =[
    path('reacttest/', ReactTest.as_view(), name='reacttest'),
    path('reacttest/<int:id>/', ReactCRUDE.as_view(), name='reacttestrud'),

]