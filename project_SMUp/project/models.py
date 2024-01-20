#0
from django.db import models
from django.utils import timezone

# Create your models here.
class Users(models.Model):
    status = [
        ('member','Member'),
        ('admin','Admin')
    ]

    firstname = models.CharField(max_length=50,null=False)
    lastname = models.CharField(max_length=50,null=False)
    username = models.CharField(max_length=50,null=False,unique=True)
    password = models.CharField(max_length=50,null=False)
    email = models.EmailField(max_length=60,null=False,unique=True)
    role = models.CharField(max_length=20, choices=status, default='member')

class Posts(models.Model):
    post_title = models.CharField(max_length=50,null=False)
    post_thumbnail = models.ImageField(null=True, blank=True, upload_to = 'images/')
    post_sfdc = models.CharField(max_length=200,null=True)
    post_date = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(Users,on_delete=models.CASCADE,null=False,related_name='posts')
    ulike_post = models.ManyToManyField(Users,related_name='liked_posts')

class Products(models.Model):
    description = models.CharField(max_length=256,null=False)
    price = models.IntegerField(null=False)
    quantity = models.IntegerField(null=False)
    img_src = models.ImageField(null=True, blank=True, upload_to = 'images/')
    post = models.OneToOneField(Posts,on_delete=models.CASCADE,related_name='products',default='')
    contact_facebook = models.CharField(max_length=255,null=False,default='')
    contact_line = models.CharField(max_length=255,null=False ,default='')

class Feedbacks(models.Model):
    title = models.CharField(max_length=50,null=False)
    description = models.CharField(max_length=256,null=False)

class Login(models.Model):
    username = models.CharField(max_length=50,null=False)
    password = models.CharField(max_length=50,null=False)

class Register(models.Model):
    firstname = models.CharField(max_length=50,null=False)
    lastname = models.CharField(max_length=50,null=False)
    username = models.CharField(max_length=50,null=False)
    password = models.CharField(max_length=50,null=False)
    email = models.EmailField(max_length=60,null=False)