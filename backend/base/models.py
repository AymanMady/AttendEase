from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models


class School(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name
    
class CustomUserManager(BaseUserManager):
    def create_user(self, phone, password=None, **extra_fields):
        if not phone:
            raise ValueError("Le numéro de téléphone est obligatoire")
        user = self.model(phone=phone, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, phone, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(phone, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    phone = models.CharField(max_length=15, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_teacher = models.BooleanField(default=False)
    is_director = models.BooleanField(default=False)
    school = models.ForeignKey(School, on_delete=models.CASCADE, related_name="users",null=True)
    name = models.CharField(max_length=50,blank=True)


    objects = CustomUserManager()

    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.phone


class Classe(models.Model):
    name = models.CharField(max_length=100)
    school = models.ForeignKey(School, on_delete=models.CASCADE, related_name="classes")

    def __str__(self):
        return f"{self.name} - {self.school.name}"

class Student(models.Model):
    numero = models.CharField(max_length=50, unique=True)
    name_ar = models.CharField(max_length=255)
    name_fr = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    classe = models.ForeignKey(Classe, on_delete=models.CASCADE, related_name="students")

    def __str__(self):
        return f"{self.name_fr} ({self.numero})"


class Subject(models.Model):
    name = models.CharField(max_length=100)
    school = models.ForeignKey(School, on_delete=models.CASCADE, related_name="subjects")

    def __str__(self):
        return f"{self.name} - {self.school.name}"
    
class Attendance(models.Model):  
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="attendances")
    classe = models.ForeignKey(Classe, on_delete=models.CASCADE, related_name="attendances")
    date = models.DateField()
    is_present = models.BooleanField(default=False)
    justification = models.TextField(blank=True, null=True)
    period = models.CharField(max_length=20, blank=True, null=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name="attendances")

    def __str__(self):
        return f"{self.student.name_fr} - {self.classe.name} - {self.date} - {'Présent' if self.is_present else 'Absent'}"

