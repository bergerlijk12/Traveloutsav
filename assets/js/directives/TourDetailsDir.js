travelApp.directive('TourDetailsDir', function(){
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/tour-details.html',
        controller: 'TourDetailsCtrl',
        link: function(elem, attr, scope, ctrl) {
        }
    }
}