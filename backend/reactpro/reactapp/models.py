from django.db import models

class ToDo(models.Model):
    title = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    completed = models.BooleanField(default=False)


    def __unicode__(self):
        return self.title

    def __str__(self):
        return str(self.title)

# Create your models here.
