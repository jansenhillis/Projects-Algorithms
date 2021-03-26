from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import AttackForm
from .models import Attack, Severity, Duration
from login.models import User
from bogartAsthmaTracker.decorators import authenticate_user

# Create your views here.
@authenticate_user
def index(request):
    attack_form = AttackForm()

    labels = []
    data = []
    
    # queryset = Attack.objects.all()
    # for attack in queryset:
    #     labels.append(attack.date_time)
    #     # data.append(attack)


    context = {
        'attack_form': attack_form,
        'attacks': Attack.objects.all(),
        'labels': labels,
        'data': data,
    }
    return render(request, 'aww.html', context)

@authenticate_user
def add_attack(request):
    if request.method == "POST":
        # errors = Attack.objects.validator(request.POST)
        # if errors:
        #     for error in errors.values():
        #         messages.error(request, error)
        #     return redirect('index')
        # else:
        auth_user = User.objects.filter(pk=request.session['user_id'])

        if auth_user:


            attack_form = AttackForm(request.POST)

            # if attack_form.is_valid():
            attack_form.save()

            messages.success(request, "Attack logged successfully.")
            return redirect('index')
        else:
            messages.error(request, "User not found.")
            return redirect('index')

    return redirect('/')
