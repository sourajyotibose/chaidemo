'use strict';

angular.
  module('newsletterApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<article-list></article-list>'
        }).
        when('/archives', {
          template: '<archive-pages></archive-pages>'
        }).
        when('/home/:articleId', {
          template: '<article-details></article-details>'
        }).
        when('/contactus', {
          template: '<contact-newsletter></contact-newsletter>'
        }).
        otherwise('/home');
    }
]);
