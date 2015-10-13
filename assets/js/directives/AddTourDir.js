travelApp.directive('addTour', function() {
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/add-tour.html',
        controller: 'ToursCtrl',
        link: function(elem, attr, scope, ctrl) {
            
            
        }
    }
});