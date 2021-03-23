from django.db import models

class Duration(models.Model):
    name = models.CharField(max_length=16)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Attack(models.Model):
    datetime = models.DateTimeField()

    # duration = 
    # severity = 
    patterns = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self): 
        return "Attack: ", self.id, "Date: ", self.datetime