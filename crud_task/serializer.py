from rest_framework import serializers
from crud_task.models import Task

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        #fields = ("id", "title", "description", "done")
        fields = "__all__"
