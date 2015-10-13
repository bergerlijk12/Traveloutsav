// create the controller and inject Angular's $scope
travelApp.controller('imageModalCtrl', function($scope, $http, $location, TourFactory) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    TourFactory.getSpecialTours().then(function (data) {
        $scope.tours = data.tours;
    },
    function (errorMessage) {
        alert("222");
    });
    
});