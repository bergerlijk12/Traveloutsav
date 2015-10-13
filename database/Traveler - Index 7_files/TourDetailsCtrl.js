// create the controller and inject Angular's $scope
travelApp.controller('TourDetailsCtrl', function($scope, $http, $location, $routeParams, TourFactory) {
    
    $scope.tours = [];
    
    TourFactory.getDetailTour($routeParams).then(function (data) {
        $scope.tourDetails = data.details;
        $scope.activities = data.activities;
        $scope.notes = data.notes;
        $scope.inclusions = data.inclusions;
        $scope.exclusions = data.exclusions;
        //$scope.exclusions = data.exclusions;
    },
    function (errorMessage) {
        alert("222");
    });
    
});