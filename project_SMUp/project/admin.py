#1
from django.contrib import admin
from .models import Posts,Products,Feedbacks,UserPosts

# Register your models here.
admin.site.register(Posts)
admin.site.register(Products)
admin.site.register(Feedbacks)
admin.site.register(UserPosts)
