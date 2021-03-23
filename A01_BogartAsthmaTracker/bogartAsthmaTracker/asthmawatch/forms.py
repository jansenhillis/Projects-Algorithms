from django import forms
from .models import Attack

class AttackForm(forms.ModelForm):

    class Meta:
        model = Attack
        fields = ('__all__')
        widgets = {
            'datetime': forms.DateTimeInput(attrs={
                'class': 'datetime-input'
                })
        }
