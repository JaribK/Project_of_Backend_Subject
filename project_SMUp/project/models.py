#0
from django.db import models
from django.utils import timezone, dateformat
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _
from django.shortcuts import get_object_or_404
from django.dispatch import receiver

def formatted_date():
    return dateformat.format(timezone.now(), 'Y-m-d H:i:s')

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

Status_like = (
    (0,False),
    (1,True),
)

# Create your models here.
class Posts(models.Model):
    post_title = models.CharField(max_length=50,null=False)
    post_thumbnail = models.ImageField(_("Image"),null=True, upload_to = upload_to )
    post_sfdc = models.CharField(max_length=200,null=True)
    post_date = models.DateTimeField(default=formatted_date)
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=False,related_name='posts')
    
class Products(models.Model):
    title = models.CharField(max_length=50,default='title_product')
    description = models.CharField(max_length=256,null=False)
    price = models.IntegerField(null=False)
    quantity = models.IntegerField(null=False)
    img_src = models.ImageField(_("Image"),null=True, upload_to = upload_to )
    post = models.ForeignKey(Posts,on_delete=models.CASCADE,related_name='products',default='')
    contact_facebook = models.CharField(max_length=255,null=False,default='')
    contact_line = models.CharField(max_length=255,null=False ,default='')

class UserPosts(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name='user_posts')
    post = models.ForeignKey(Posts,on_delete=models.CASCADE,related_name='post_products')
    status_like = models.SmallIntegerField(choices=Status_like,default=Status_like[1][0])

    class Meta:
        db_table = 'user_like_post'

class Feedbacks(models.Model):
    title = models.CharField(max_length=50,null=False)
    description = models.CharField(max_length=256,null=False)


def create_highest_id_record():
    max_id = User.objects.all().aggregate(models.Max('id'))['id__max']
    max_id = max_id if max_id is not None else 0

    new_instance = User(id=max_id + 1, your_field='some_value')
    new_instance.save()