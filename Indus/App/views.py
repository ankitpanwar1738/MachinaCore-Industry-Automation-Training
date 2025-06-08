from django.shortcuts import render
from App.models import blog_post
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from App.models import contact,Category,myservice,faqs
from django.contrib import messages
from django.utils.text import slugify

# Create your views here.
def base(request):
    return render(request,'base.html')

def home(request):
     Service=myservice.objects.all()
     context={
        'Service':Service,
    }
     return render(request,'home.html',context)

def service(request):
    Service=myservice.objects.all()
    context={
        'Service':Service,
    }
    return render(request,'service.html',context)

def faq(request):
    Faq=faqs.objects.all()
    context={
        'Faq':Faq,
    }
    return render(request,'faq.html',context)

def about(request):
    return render(request,'about.html')

def contact_us(request):
    messages.success(request,'Your message sent successfully! We will contact you shortly.')

    if request.method=='POST':
       fname=request.POST['fname']
       lname=request.POST['lname']
       email=request.POST['email']
       phone=request.POST['tel']
       message=request.POST['message']
       Contact=contact(fname=fname,lname=lname,email=email,phone=phone,message=message,)
       Contact.save()

    return render(request,'contact_us.html')


def blog(request):
    Blog = blog_post.objects.all().order_by('-created_at')  # Show newest first
    recent_posts = blog_post.objects.all().order_by('-created_at')[:3]  # Last 5 posts
    categories = Category.objects.all()  # Optional: If you want to list categories

    context = {
        'Blog': Blog,
        'recent_posts': recent_posts,
        'categories': categories,  
    }
    return render(request, 'blog.html', context)


def blog_detail(request,slug):
    # return HttpResponse()
    blog = get_object_or_404(blog_post, slug=slug)
    return render(request, 'blog_detail.html', {'blog': blog})

def service_detail(request,slug):
    Service = get_object_or_404(myservice, slug=slug)
    return render(request,'service_detail.html',{'Service':Service})


def service_contact(request):
    return render(request,'service_contact.html')