from django.shortcuts import render
from rest_framework import viewsets
from crud_task.serializer import TaskSerializer
from crud_task.models import Task

# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


