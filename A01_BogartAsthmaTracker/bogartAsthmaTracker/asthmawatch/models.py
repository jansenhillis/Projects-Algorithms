from django.db import models


class Attack(models.Model):
    datetime = models.DateTimeField()

    # duration = 
    # severity = 

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self): 
        return "Attack: ", self.id, "Date: ", self.date, self.time