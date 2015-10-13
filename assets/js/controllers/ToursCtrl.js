// create the controller and inject Angular's $scope
travelApp.controller('ToursCtrl', function($scope, $http, $location, TourFactory) {
    
    $scope.tours = [];
    $scope.tab = 1;
    $scope.tour = {};
    $scope.activities = {};
    $scope.cities = {};
    $scope.types = {};
    $scope.durations = {};
    $scope.inclusions = {};
    $scope.currencies = {};
    $scope.tour.inclusions = [];
    $scope.tour.exclusions = [];
    
    $scope.ViewDetail = function($scope){
        var id = obj.target.attributes.data.value;
    }
    
    TourFactory.getSpecialTours().then(function (data) {
        $scope.tours = data.tours;
        console.log($scope.tours)
    },
    function (errorMessage) {
        
    });
    
    $scope.message = '';
    
    
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
    
    $scope.deleteTour = function(tour){
        $scope.tours.splice( $scope.tours.indexOf(tour), 1 );
        TourFactory.deleteTour(tour.id).then(function (data) {
            return 1;
        },
        function (errorMessage) {
        });
    }
    
    $scope.EditTour = function(tour){
        
        $scope.tour = tour;
        
    }
    
});