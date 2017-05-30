'use strict';

angular.
  module('envDetails').
  component('envDetails', {
    templateUrl: 'env-details/env-details.template.html',
    controller: ['$routeParams', 'Report',
      function EnvDetailController($routeParams, Report) {
        var self = this;

        Report.releaseGetAll().then(function(response) {
            console.log(response.data);
            self.releases = response.data.sort().reverse();
        });

        Report.envGetAll().then(function(response) {
          console.log(response.data);
          self.environments = response.data;
        });


      }
    ]
  });
