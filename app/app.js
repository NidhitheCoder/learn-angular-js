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

    $scope.ninjas = [
      {
        name: "Tom",
        belt: "black",
        rate: 50,
        available: true,
        path: 'sample.png'
      },
      { name: "Jenny", belt: "black", rate: 50, available: false, path: 'sample.png' },
      { name: "jerry", belt: "green ", rate: 50, available: true, path: 'sample.png' },
      { name: "David", belt: "green", rate: 50, available: false, path: 'sample.png' },
      { name: "smith", belt: "black", rate: 50, available: true, path: 'sample.png' },
    ];
  },
]);
