from app.interest.models import Interest
from rest_framework import serializers


class InterestSerializer(serializers.ModelSerializer):

    # def validate(self, data):
    #     if not len(data.get("ingredients")):
    #         raise serializers.ValidationError(" Don't leave the ingredients empty")
    #     return data

    class Meta:
        model = Interest
        fields = ["interest"]

