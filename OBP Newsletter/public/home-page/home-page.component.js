'use strict';

angular.module('homePage').
  component('homePage', {
    templateUrl: 'home-page/home-page.template.html',
    controller: [ '$routeParams',
      function homePageController($routeParams) {
        var self = this;

        self.homeElements = [
          {name: 'Home', link:'home', index:'1'},
          {name: 'Archives', link:'archives', index:'2'},
          {name: 'Uploads', link:'uploads', index:'3'},
          {name: 'Contact Us', link:'contactus', index:'4'},
        ];
      }
    ]
  });
