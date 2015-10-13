// create the controller and inject Angular's $scope
travelApp.controller('TestimonialsCtrl', function($scope, $http, $location, TestimonialFactory) {
    $scope.testimonials = [];
    
    $scope.testimonial = {};
    
    TestimonialFactory.getAllTestimonial().then(function (data) {
        $scope.testimonials = data.testimonials;
    },
    function (errorMessage) {
    });
    
    
    $scope.addTestimonial = function(testimonial){
        $scope.testimonial = angular.copy(testimonial);
        
        TestimonialFactory.addTestimonial(testimonial).then(function (data) {
            $("*").val("");
            $scope.testimonials.push($scope.testimonial);
        },
        function (errorMessage) {
        });
    }
    
});