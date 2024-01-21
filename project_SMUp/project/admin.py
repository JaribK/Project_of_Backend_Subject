#1
from django.contrib import admin
from .models import Users,Posts,Products,Feedbacks,Login,Register

# Register your models here.
admin.site.register(Users)
admin.site.register(Posts)
admin.site.register(Products)
admin.site.register(Feedbacks)
admin.site.register(Login)
admin.site.register(Register)