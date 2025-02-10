from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LogoutView, StudentViewSet, ClassroomViewSet, SchoolViewSet, AttendanceViewSet

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'classrooms', ClassroomViewSet)
router.register(r'schools', SchoolViewSet)
router.register(r'attendances', AttendanceViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('logout/', LogoutView.as_view(), name='logout'),
]
