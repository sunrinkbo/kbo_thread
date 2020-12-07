from django.conf.urls import include
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import ArticleView, CommentView

article_list = ArticleView.as_view({
    'post': 'create',
    'get': 'list'
})

article_detail = ArticleView.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

comment_list = CommentView.as_view({
    'post': 'create',
    'get': 'list'
})

comment_detail = CommentView.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = format_suffix_patterns([
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),

    path('article/', article_list, name='article_list'),
    path('article/<int:pk>/', article_detail, name='article_detail'),

    path('comment/', comment_list, name='comment_list'),
    path('comment/<int:pk>/', comment_detail, name='comment_detail'),
])
