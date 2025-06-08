from django.db import models
from django.utils.text import slugify
from ckeditor.fields import RichTextField
from django.urls import reverse



# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=150, unique=True, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        # Auto-generate slug from name if not provided
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)



class blog_post(models.Model):
    title=models.CharField(max_length=300)
    image=models.ImageField(upload_to='blog_img/',null=True)
    content = RichTextField()
    created_at = models.DateTimeField(auto_now_add=True)
    slug=models.SlugField(max_length=150,null=True,unique=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name='posts')


    def __str__(self):
        return self.title  
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    

    # def snipper(self):
    #     return self.content[:50] + "..."


class contact(models.Model):
        sno=models.AutoField(primary_key=True)
        fname=models.CharField(max_length=50)
        lname=models.CharField(max_length=50)
        email=models.EmailField(max_length=100)
        phone=models.CharField(max_length=13)
        message=models.TextField()
        timestamp=models.DateTimeField(auto_now_add=True,blank=True)

        def __str__(self):
             return 'Message from' + ' ' + self.fname + ' ' + self.lname



class myservice(models.Model):
     image=models.ImageField(upload_to='service_img/',null=True)
     heading=models.CharField(max_length=100)
     content=RichTextField()
     price=models.CharField(max_length=50)
     slug=models.SlugField(max_length=200,null=True,unique=True, blank=True)

     def __str__(self):
          return self.heading   

     def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.heading)
            slug = base_slug
            counter = 1
            while myservice.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

class faqs(models.Model):
     que=models.CharField(max_length=200)
     ans=models.TextField()

     def __str__(self):
          return self.que
     