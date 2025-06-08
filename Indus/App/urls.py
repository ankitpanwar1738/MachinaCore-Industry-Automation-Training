from django.contrib import admin
from django.urls import path,include
from.import views

urlpatterns = [
   path('base',views.base,name='base'),
   path('',views.home,name='home'),
   path('service',views.service,name='service'),
   path('services/<slug:slug>/', views.service_detail, name='service_detail'),
   path('faq',views.faq,name='faq'),
   path('aboutus',views.about,name='aboutus'),
   path('contact_us',views.contact_us,name='contact_us'),
   path('blog',views.blog,name='blog'),
   path('service_contact',views.service_contact,name='service_contact'),
   path('blog_detail/<slug:slug>', views.blog_detail, name='blog_detail'),

   # path('category/<slug:slug>/', views.blog_by_category, name='blog_by_category'),

]