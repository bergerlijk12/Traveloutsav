travelApp.directive('adminTestimonial', function($timeout) {
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/admin-testimonial.html',
        controller: 'TestimonialsCtrl',
        link: function(elem, attr, scope, ctrl) {
            
            
        }
    }
});