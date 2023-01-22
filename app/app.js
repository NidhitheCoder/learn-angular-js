const myNinjaApp = angular.module("myNinjaApp", ["ngRoute"]);
myNinjaApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("./home", {
        templateUrl: "views/home.html",
        controller: 'NinjaController'
      })
      .when("directory", {
        templateUrl: "views/directory.html",
        controller: "ninjaController",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

// Before application run
myNinjaApp.config(() => {});

// Fire when the application run
myNinjaApp.run(() => {});

myNinjaApp.directive('randomNinja', [function() {
  return {};
}])

// function inside controller contain code for 'NinjaController' section of the web application
myNinjaApp.controller("NinjaController", ($scope) => {
  $scope.message = "message from controller";
  $scope.ninjas = ["Tom", "Jenny", "jerry", "David", "smith"];
});

// For protect from minification
myNinjaApp.controller("NinjaController", [
  "$scope",
  '$http',
  ($scope, $http) => {
    $scope.message = "message from controller";

    $scope.removeNinja = (ninja) => {
      let removedNinja = $scope.ninjas.indexOf(ninja);
      $scope.ninjas.splice(removedNinja, 1);
    };

    $scope.addNinja = () => {
      $scope.ninjas.push({
        name: $scope.newninja.name,
        belt: $scope.newninja.belt,
        rate: parseInt($scope.newninja.rate),
        available: true,
      });

      $scope.newninja.name = "";
      $scope.newninja.belt = "";
      $scope.newninja.rate = "";
    };

  $http.get('data/ninjas.json').success(function(data) {
    $scope.ninjas = data;
  })

    // console.log(angular.toJson($scope.ninjas))
  },
]);
