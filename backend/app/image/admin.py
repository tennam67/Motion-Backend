from django.contrib import admin

# Register your models here.
from app.image.models import PostImage

admin.site.register(PostImage)