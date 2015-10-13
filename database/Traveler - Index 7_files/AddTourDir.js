travelApp.directive('addTour', function() {
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/add-tour.html',
        controller: 'AddTourCtrl',
        link: function(elem, attr, scope, ctrl) {
            
            
        }
    }
});