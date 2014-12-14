'use strict';

angular.module('churchWebsite')
  .controller('NavBarCtrl', ['$scope', function ($scope) {
    $scope.date = new Date();
  }]);
