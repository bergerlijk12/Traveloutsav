// create the controller and inject Angular's $scope
travelApp.controller('adminTourCtrl', function($scope, $http, $location, TourFactory) {
    // create a message to display in our view
    $scope.message = '';
    
                   
    $scope.tours = [];
    
    TourFactory.getTours().then(function (data) {
        $scope.tours = data.tours;
    },
    function (errorMessage) {
    });
    
    $scope.filterFunction = function(element) {
        return element.name.match(/^Ma/) ? true : false;
    };
    
    $scope.onChange = function(id){
        TourFactory.makeSpecialTours(id).then(function (data) {
            return 1;
        },
        function (errorMessage) {
        });
    }
    
    $scope.checkBox = function(value){
        if(value == 1){
            return true;
        }
        return false;
    }
    
    $scope.deleteTour = function(value){
        TourFactory.deleteTour(id).then(function (data) {
            return 1;
        },
        function (errorMessage) {
        });
    }
    
});