# Generated by Django 3.1.7 on 2021-03-22 21:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('post', '0001_initial'),
        ('image', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='postimage',
            name='post',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='post_images', to='post.post'),
        ),
    ]