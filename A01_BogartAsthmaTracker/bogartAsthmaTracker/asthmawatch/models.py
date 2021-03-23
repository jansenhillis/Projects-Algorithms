from django.db import models

class Duration(models.Model):
    name = models.CharField(max_length=16)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self): 
            return self.name


class Severity(models.Model):
    name = models.CharField(max_length=16)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self): 
            return self.name

class Attack(models.Model):
    date_time = models.DateTimeField()
    duration = models.ForeignKey(Duration, on_delete=models.PROTECT)
    severity = models.ForeignKey(Severity, on_delete=models.PROTECT)
    patterns = models.TextField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self): 
        return f"Attack: {self.id} - {self.date_time}"
