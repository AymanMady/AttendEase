from rest_framework import viewsets, status 
from .models import *
from .serializers import *
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data.get("refresh_token")
            if not refresh_token:
                return Response({"error": "Refresh token manquant"}, status=status.HTTP_400_BAD_REQUEST)
            
            token = RefreshToken(refresh_token)
            token.blacklist()  
            
            return Response({"message": "Déconnexion réussie"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)



class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]  

    @action(detail=False, methods=['get'], url_path='by_classroom/(?P<classroom_id>[^/.]+)')
    def get_students_by_class(self, request, classe_id=None):
        """
        Retourne les étudiants appartenant à une classe spécifique.
        Ex: /students/by_classroom/1/
        """
        students = Student.objects.filter(classe_id=classe_id)

        if not students.exists():
            return Response({"error": "Aucun étudiant trouvé pour cette classe"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.get_serializer(students, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ClasseViewSet(viewsets.ModelViewSet):
    queryset = Classe.objects.all()
    serializer_class = ClasseSerializer
    permission_classes = [IsAuthenticated]  

class SchoolViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
    permission_classes = [IsAuthenticated]  
        
class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer
    permission_classes = [IsAuthenticated]  

    @action(detail=False, methods=['post'])
    def bulk_create(self, request, *args, **kwargs):
        """
        Cette méthode permet de recevoir une liste de présences et de les enregistrer en une seule requête.
        """
        attendances_data = request.data 

        serializer = self.get_serializer(data=attendances_data, many=True)
        
        if serializer.is_valid():
            serializer.save() 
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
