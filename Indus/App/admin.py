from django.contrib import admin
from.models import blog_post,contact,Category,myservice,faqs
# Register your models here.
class MyServiceAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('heading',)}


admin.site.register(blog_post)
admin.site.register(contact)
admin.site.register(Category)
admin.site.register(myservice,MyServiceAdmin)
admin.site.register(faqs)
