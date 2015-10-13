// create the controller and inject Angular's $scope
travelApp.controller('travelQueryCtrl', function($scope, $http, $location, $routeParams, TourFactory) {
    
    $scope.query = {};
    
    /*TourFactory.addQuery($scope.parameters).then(function (data) {
        
    },
    function (errorMessage) {
        
    });*/
    
    
    $('.date').datepicker({
            weekStart: 2,
            startDate: "01/10/2013"
    });
    
    
    $scope.addQuery = function(query){
        
        TourFactory.addQuery($scope.query).then(function (data) {
            $("#queryModal").hide();
        },
        function (errorMessage) {

        });
    }
    
});