# Generated by Django 4.2.2 on 2024-07-17 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authorization', '0004_alter_user_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profile_picture',
            field=models.ImageField(default='profile_pictures/default.jpg', upload_to='profile_pictures/'),
        ),
    ]
