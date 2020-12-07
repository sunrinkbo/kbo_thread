from django.db import models


class Article(models.Model):
    name = models.CharField(max_length=20)
    ip = models.CharField(max_length=15)
    time = models.CharField(max_length=200)
    text = models.CharField(max_length=1000)

    def __str__(self):
        return self.text


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    ip = models.CharField(max_length=15)
    time = models.CharField(max_length=200)
    text = models.CharField(max_length=1000)

    def __str__(self):
        return self.text
