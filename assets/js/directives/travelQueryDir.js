travelApp.directive('travelQuery', function($timeout) {
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/travel-query.html',
        controller: 'travelQueryCtrl',
        link: function(elem, attr, scope, ctrl) {
            
        }
    }
});