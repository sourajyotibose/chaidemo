'use strict';

angular.
  module('reportDetails').
  component('reportDetails', {
    templateUrl: 'report-details/report-details.template.html',
    controller: ['$routeParams', 'Report',
      function ReportDetailController($routeParams, Report) {
        var self = this;
        self.id = $routeParams.id;
        console.log(self.id);

        Report.reportGetOne(self.id).then(function(response) {
          console.log(response.data.length);
          self.individualTestCase = response.data;
        });
      }
    ]
  });
