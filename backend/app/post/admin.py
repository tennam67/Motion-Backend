from django.contrib import admin

# Register your models here.
from app.post.models import Post

admin.site.register(Post)
