from django.contrib import admin

# Register your models here.
from app.comment.models import Comment


# admin.site.register(Comment)

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('content', 'post', 'created')
    search_fields = ('name', 'email', 'body')



