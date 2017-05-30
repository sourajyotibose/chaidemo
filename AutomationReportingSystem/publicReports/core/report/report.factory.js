'use strict';

angular.
  module('core.report').
  factory('Report', ['$http',
    function($http) {
      return {
        reportGetAll: reportGetAll,
        reportGetOne: reportGetOne,
        reportsGetByCurrentDate : reportsGetByCurrentDate,
        reportsGetByGivenDate : reportsGetByGivenDate,
        envGetAll: envGetAll,
        envGetSingle: envGetSingle,
        updateJira: updateJira,
        releaseGetAll: releaseGetAll,
        updateComment : updateComment,
        updateResult : updateResult
      };

      function reportGetAll() {
        return $http.get('/api/reports').then(complete).catch(failed);
      }

      function reportGetOne(id) {
        return $http.get('/api/reports/' + id).then(complete).catch(failed);
      }

      function reportsGetByCurrentDate(envName, type) {
        return $http.get('/api/envs/currDate/' + envName + '/' + type).then(complete).catch(failed);
      }

      function reportsGetByGivenDate(envName, date, type) {
        return $http.get('/api/envs/'+date+'/'+ envName + '/' + type).then(complete).catch(failed);
      }

      function envGetAll() {
        return $http.get('/api/envs').then(complete).catch(failed);
      }

      function updateJira(number,id) {
        return $http.get('/api/reports/'+id+'/'+number).then(complete).catch(failed);
      }

      function updateResult(result,id) {
        return $http.get('/api/result/'+id+'/'+result).then(complete).catch(failed);
      }

      function envGetSingle(envName) {
        return $http.get('/api/envs/currDate/' + envName).then(complete).catch(failed);
      }

      function releaseGetAll() {
        return $http.get('/api/envs/release').then(complete).catch(failed);
      }

      function updateComment(comment,id) {
        return $http.get('/api/reports/'+id+'/comments/'+comment).then(complete).catch(failed);
      }

      function complete(response) {
        return response;
      }

      function failed(error) {
        console.log(error.statusText);
      }
    }
  ]);
