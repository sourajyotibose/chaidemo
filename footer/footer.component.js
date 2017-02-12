'use strict';

angular.
  module('footer').
  config(function($mdThemingProvider) {
    $mdThemingProvider.theme("default")
      .primaryPalette("grey", {
        'default': '900'
      });
  }).
  component('footer', {
    templateUrl : 'footer/footer.template.html',
    controller : [
      function FooterController() {
      }
    ]
  });
