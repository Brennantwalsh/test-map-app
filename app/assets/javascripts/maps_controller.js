(function() {
  "use strict";

  angular.module("app").controller("mapsController", function($scope, $http) {
    $scope.setup = function() {
      $http.get("/tiles.json").then(function(response) {
        $scope.tiles = response.data
      });
    };

    $scope.showBar = false;
    $scope.showTiles = function() {
      $scope.showBar = !$scope.showBar;
    };

  $scope.limitToThis = 10;
  });

}());