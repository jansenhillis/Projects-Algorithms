from django import forms
from .models import Attack

class AttackForm(forms.ModelForm):
    DURATION = [
        ('short', 'Short'),
        ('med', 'Medium'),
        ('long', 'Long')
    ]
    duration = forms.ChoiceField(choices=DURATION)

    SEVERITY = [
        ('gentle', 'Gentle'),
        ('light', 'Light'),
        ('med', 'Medium'),
        ('hard', 'Hard'),
    ]
    severity = forms.ChoiceField(choices=SEVERITY)

    class Meta:
        model = Attack
        fields = ('__all__')
        widgets = {
            'datetime': forms.DateTimeInput(attrs={
                'class': 'datetime-input'
                })
        }
