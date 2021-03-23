from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import AttackForm

# Create your views here.
def index(request):
    attack_form = AttackForm(request.POST)
    context = {
        'attack_form': attack_form
    }
    return render(request, 'aww.html', context)
