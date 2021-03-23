from django.contrib import admin
from .models import Attack, Duration, Severity

# Register your models here.
admin.site.register(Attack)
admin.site.register(Duration)
admin.site.register(Severity)