'use strict';

angular.
  module('contactNewsletter').
  component('contactNewsletter', {
    templateUrl : 'contact-us/contact-us.template.html',
    controller: ['$routeParams',
      function contactUsController($routeParams) {
        var self = this;
      }
    ]
  });
