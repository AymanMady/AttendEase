from rest_framework import viewsets, status 
from .models import *
from .serializers import *
from rest_framework.decorators import action
from rest_framework.response import Response

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class ClassroomViewSet(viewsets.ModelViewSet):
    queryset = Classroom.objects.all()
    serializer_class = ClassroomSerializer
    
class SchoolViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
    
class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer
    
    @action(detail=False, methods=['post'])
    def bulk_create(self, request, *args, **kwargs):
        """
        Cette méthode permet de recevoir une liste de présences et de les enregistrer en une seule requête.
        """
        attendances_data = request.data  # La liste des présences envoyée depuis le frontend

        print("########################################")
        print(attendances_data)

        # Sérialiser les données avec l'option many=True pour indiquer une liste d'objets
        serializer = self.get_serializer(data=attendances_data, many=True)
        
        if serializer.is_valid():
            serializer.save()  # Enregistre toutes les présences dans la base de données
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
