from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(School)

admin.site.register(Classe)

admin.site.register(Student)

admin.site.register(Attendance)

admin.site.register(CustomUser)