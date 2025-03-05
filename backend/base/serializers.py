from rest_framework import serializers
from .models import *

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class ClasseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classe
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'

class AttendanceSerializer(serializers.ModelSerializer):
    name_ar = serializers.SerializerMethodField()
    name_fr = serializers.SerializerMethodField()
    phone = serializers.SerializerMethodField()
    numero = serializers.SerializerMethodField()

    class Meta:
        model = Attendance
        fields = ['id', 'classe', 'date', 'name_ar', 'name_fr', 'numero', 'phone', 'justification', 'is_present']

    def get_name_ar(self, obj):  
        return obj.student.name_ar if obj.student else None
    
    def get_name_fr(self, obj):  
        return obj.student.name_fr if obj.student else None

    def get_phone(self, obj):  
        return obj.student.phone if obj.student else None

    def get_numero(self, obj):  
        return obj.student.numero if obj.student else None

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
