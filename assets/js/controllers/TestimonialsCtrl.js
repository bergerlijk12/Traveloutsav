// create the controller and inject Angular's $scope
travelApp.controller('TestimonialsCtrl', function($scope, $http, $location, TestimonialFactory) {
    $scope.testimonials = [];
    
    $scope.testimonial = {};
    
    TestimonialFactory.GetAllTestimonial().then(function (data) {
        $scope.testimonials = data.testimonials;
    },
    function (errorMessage) {
    });
    
    
    $scope.addTestimonial = function(testimonial){
        $scope.testimonial = angular.copy(testimonial);
        
        TestimonialFactory.AddTestimonial(testimonial).then(function (data) {
            $("*").val("");
            $scope.testimonials.push($scope.testimonial);
        },
        function (errorMessage) {
        });
    }
    
    $scope.deleteTestimonial = function(testimonial){
        $scope.testimonials.splice( $scope.testimonials.indexOf(testimonial), 1 );
        TestimonialFactory.DeleteTestimonial(testimonial.id).then(function (data) {
            
        },
        function (errorMessage) {
        });
    }
    
});