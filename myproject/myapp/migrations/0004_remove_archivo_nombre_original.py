# Generated by Django 4.2.5 on 2023-09-10 03:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_archivo_nombre_original'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='archivo',
            name='nombre_original',
        ),
    ]
