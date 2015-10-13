travelApp.directive('adminTour', function() {
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/admin-tour-list.html',
        controller: 'adminTourCtrl',
        link: function(elem, attr, scope, ctrl) {
            
            
        }
    }
});