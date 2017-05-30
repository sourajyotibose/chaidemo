'use strict';

angular.
  module('archivePages').
  component('archivePages', {
    templateUrl: 'archive-pages/archive-pages.template.html',
    controller: ['$routeParams', 'Articles',
      function archivePageController($routeParams, Articles) {
        var self = this;

        Articles.articlesGetAll().then(function(response) {
          console.log(response.data);
          self.articles = response.data;
        });
      }
    ]
  });
