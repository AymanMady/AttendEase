# Utiliser une image Python comme base
FROM python:3.10

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet
COPY . /app/

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Exposer le port 8000
EXPOSE 8000

# Commande pour exécuter Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
