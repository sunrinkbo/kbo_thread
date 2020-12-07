from django.shortcuts import render
from .models import Article, Comment
from .serializers import ArticleSerializer, CommentSerializer
from rest_framework import viewsets


class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def perform_create(self, serializer):
        serializer.save(ip=get_client_ip(self.request))


class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(article=self.request.article, ip=get_client_ip(self.request))


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip
