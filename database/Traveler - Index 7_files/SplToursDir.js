travelApp.directive('specialTour', function($timeout) {
    'use strict';
    
    return {
        resttict: 'A',
        terminal : true,
        transclude : false,
        scope: true,
        templateUrl: 'templates/special-tours.html',
        controller: 'SpecialTourCtrl',
        link: function(scope, element, attrs, ctrl) {            
            if (!scope.$last) setTimeout(function(){
                console.log("1232131312");
                scope.$emit('onRepeatLast', element, attrs);
            }, 1000);
            
        }
    };
});