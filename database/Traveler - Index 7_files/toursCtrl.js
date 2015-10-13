// create the controller and inject Angular's $scope
travelApp.controller('ToursCtrl', function($scope, $http, $location, TourFactory) {
    
    $scope.tours = [];
    
    $scope.ViewDetail = function($scope){
        var id = obj.target.attributes.data.value;
    }
    
    /*TourFactory.getSpecialTours().then(function (data) {
        $scope.tours = data.tours;
        console.log($scope.tours)
    },
    function (errorMessage) {
        alert("222");
    });*/
    
});