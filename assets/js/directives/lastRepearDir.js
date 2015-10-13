travelApp.directive('onLastRepeat', function(){
    
    return function(scope, element, attrs) {
        alert("111111");
        if (scope.$last) setTimeout(function(){
            scope.$emit('onRepeatLast', element, attrs);
        }, 1);
    };
});