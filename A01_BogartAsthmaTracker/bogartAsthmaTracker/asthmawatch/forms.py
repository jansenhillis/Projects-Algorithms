from django import forms
from .models import Attack

class AttackForm(forms.ModelForm):
    DURATIONS = [
        ('short', 'Short'),
        ('med', 'Medium'),
        ('long', 'Long')
    ]

    SEVERITIES = [
        ('gentle', 'Gentle'),
        ('light', 'Light'),
        ('med', 'Medium'),
        ('hard', 'Hard'),
    ]

    class Meta:
        model = Attack
        fields = ('__all__')
        widgets = {
            'datetime': forms.DateTimeInput(attrs={
                'class': 'datetime-input'
                })
        }
