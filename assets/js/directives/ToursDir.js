travelApp.directive('tourList', function() {
    'use strict';
    
    return {
        resttict: 'A',
        terminal : true,
        transclude : false,
        scope: true,
        templateUrl: 'templates/tour-list.html',
        controller: 'SpecialTourCtrl',
        link: function(scope, element, attrs, ctrl) {
            console.log("hiiii");
        }
    };
});