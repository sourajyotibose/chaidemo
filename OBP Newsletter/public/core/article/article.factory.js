'use strict';

angular.
  module('core.articles').
  factory('Articles', ['$http',

    function($http) {
      return {
        articlesGetAll : articlesGetAll,
        articleGetOne : articleGetOne
      };

      function articlesGetAll() {
        return $http.get('/api/articles').then(complete).catch(failed);
      }

      function articleGetOne(id) {
        return $http.get('/api/articles/'+id).then(complete).catch(failed);
      }

      function complete(response) {
        return response;
      }

      function failed(error) {
        console.log(error.statusText);
      }
    }
]);
