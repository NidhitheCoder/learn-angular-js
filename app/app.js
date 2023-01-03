const myNinjaApp = angular.module("myNinjaApp", []);

// Before application run
myNinjaApp.config(() => {});

// Fire when the application run
myNinjaApp.run(() => {});

// function inside controller contain code for 'NinjaController' section of the web application
myNinjaApp.controller("NinjaController", ($scope) => {
  $scope.message = "message from controller";
  $scope.ninjas = ["Tom", "Jenny", "jerry", "David", "smith"];
});

// For protect from minification
myNinjaApp.controller("NinjaController", [
  "$scope",
  ($scope) => {
    $scope.message = "message from controller";
    $scope.ninjas = [
      {
        name: "Tom",
        belt: "green",
        rate: 50,
      },
      { name: "Jenny", belt: "black", rate: 50 },
      { name: "jerry", belt: "black", rate: 50 },
      { name: "David", belt: "green", rate: 50 },
      { name: "smith", belt: "black", rate: 50 },
    ];
  },
]);
