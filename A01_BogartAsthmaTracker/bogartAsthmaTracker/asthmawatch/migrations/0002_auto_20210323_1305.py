# Generated by Django 2.2 on 2021-03-23 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asthmawatch', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attack',
            name='patterns',
            field=models.TextField(blank=True, null=True),
        ),
    ]
