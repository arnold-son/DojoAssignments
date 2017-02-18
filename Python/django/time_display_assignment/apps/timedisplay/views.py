from django.shortcuts import render, HttpResponse
import time

# Create your views here.
def index(request):
    return render(request, 'timedisplay/index.html')
def timedisplay(request):
    context = {
    "time":time.strftime('%b %d, %Y\n%I:%M %p')
    }
    return render(request,'timedisplay/timedisplay.html',context)
