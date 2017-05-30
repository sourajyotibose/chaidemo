'use strict';

angular.
  module('articleList').
  component('articleList', {
    templateUrl: 'article-list/article-list.template.html',
    controller: ['$routeParams', 'Articles',
      function articleListController($routeParams, Articles) {
        var self = this;

        Articles.articlesGetAll().then(function(response) {
          console.log(response.data);
          self.articles = response.data;
        });
      }
    ]
  });
