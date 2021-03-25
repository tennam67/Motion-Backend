from app.interest.models import Interest
from rest_framework import serializers


class InterestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Interest
        fields = ["interest"]

