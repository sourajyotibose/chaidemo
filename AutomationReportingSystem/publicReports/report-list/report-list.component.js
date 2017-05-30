'use strict';

angular.
  module('reportList').
  component('reportList', {
    templateUrl: 'report-list/report-list.template.html',
    controller: ['$routeParams', 'Report', '$mdDialog',
      function ReportDetailController($routeParams, Report, $mdDialog) {
        var self = this;
        self.envName = $routeParams.envName;
        self.date = null;
        self.typeOfExecution = 'Servicing';
        self.types = [
          {id:'1', name:'Servicing'},
          {id:'2', name:'Origination'},
          {id:'3', name:'SinglePartyView'}
        ];

        self.resultOfExecutaions = [
          {id:'1', name:'Passed'},
          {id:'2', name:'Failed'},
        ];

        Report.envGetSingle(self.envName).then(function (response) {
          console.log(response.data.length);
          self.envDetails = response.data;
          console.log(self.envDetails);
        });

        Report.reportsGetByCurrentDate(self.envName,self.typeOfExecution).then(function(response) {
          self.report = response.data;
        });

        self.currentReportUpdate = function() {
          Report.reportsGetByCurrentDate(self.envName,self.typeOfExecution).then(function(response) {
            self.report = response.data;
          });
        }

        self.searchButton = function() {
          var dateOut = new Date(self.date);
          dateOut = new Date(dateOut.getTime() - (dateOut.getTimezoneOffset() * 60000)).toISOString();
          self.givenDate = dateOut.substr(0,10);
          console.log(self.givenDate);
          Report.reportsGetByGivenDate(self.envName, self.givenDate, self.typeOfExecution).then(function(response) {
            self.report = response.data;
          });
        }

        self.saveJIRA = function(ev, item, id) {
          // Appending dialog to document.body to cover sidenav in docs app
          self.id = id;
          var confirm = $mdDialog.prompt()
          .title('Add JIRA')
          .textContent('Enter Complete URL')
          .placeholder('JIRA Link')
          .ariaLabel('JIRA Link')
          .targetEvent(ev)
          .ok('OK')
          .cancel('Cancel');

          $mdDialog.show(confirm).then(function(result) {
            console.log('------------'+result);
            if (result != null) {
              Report.updateJira(result,self.id).then(function(response) {
                if(self.givenDate!=null){
                  Report.reportsGetByGivenDate(self.envName, self.givenDate, self.typeOfExecution).then(function(response) {
                    self.report = response.data;
                  });
                }else {
                  Report.reportsGetByCurrentDate(self.envName,self.typeOfExecution).then(function(response) {
                    self.report = response.data;
                  });
                }
              });
            }
          }, function() {
            self.status = 'You didn\'t raise a JIRA';
          });
        };


        self.saveComment = function(ev, comment, id) {
          self.id = id;
          var confirm = $mdDialog.prompt()
          .title('Add Comments')
          .textContent('Enter Comment')
          .placeholder('Comments')
          .ariaLabel('comments')
          .targetEvent(ev)
          .ok('OK')
          .cancel('Cancel');

          $mdDialog.show(confirm).then(function(result) {
            console.log(result);
            console.log(self.id);
            if (result != null) {
              Report.updateComment(result,self.id).then(function(response) {
                if(self.givenDate!=null){
                  Report.reportsGetByGivenDate(self.envName, self.givenDate, self.typeOfExecution).then(function(response) {
                    self.report = response.data;
                  });
                }else {
                  Report.reportsGetByCurrentDate(self.envName,self.typeOfExecution).then(function(response) {
                    self.report = response.data;
                  });
                }
              });
            }
          }, function() {
            self.status = 'You didn\'t raise a JIRA';
          });
        };

        self.updateResult = function(result,id) {
          self.id = id;
          Report.updateResult(result,self.id).then(function(response) {
            if(self.givenDate!=null){
              Report.reportsGetByGivenDate(self.envName, self.givenDate, self.typeOfExecution).then(function(response) {
                self.report = response.data;
              });
            }else {
              Report.reportsGetByCurrentDate(self.envName,self.typeOfExecution).then(function(response) {
                self.report = response.data;
              });
            }
          });
        };
      }
    ]
  });
