'use strict';

angular.
  module('reportApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/reports/:id', {
          template: '<report-details></report-details>'
        }).
        when('/envs', {
          template: '<env-details></env-details>'
        }).
        when('/envs/:envName', {
          template: '<report-list></report-list>'
        }).
        otherwise('/envs');
    }
]);
