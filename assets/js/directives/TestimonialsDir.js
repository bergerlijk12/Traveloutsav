travelApp.directive('testimonials', function($timeout) {
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/testimonial-list.html',
        controller: 'TestimonialsCtrl',
        link: function(elem, attr, scope, ctrl) {
            
            $timeout(function() {
                $('#reviewSlider').bxSlider({
                    minSlides: 1,
                    maxSlides: 1,
                    nextSelector: '#testimonial-next',
                    prevSelector: '#testimonial-prev',
                    nextText: '<a class="testimonial-next" style="display: block;"> </a>',
                    prevText: '<a class="testimonial-prev" style="display: block;"> </a>',
                    auto: false,
                    slideMargin: 50,
                    captions: false,
                    pager: false,
                    responsive: true,
                    controls: true
                });           
            },3000);
        }
    }
});