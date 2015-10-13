travelApp.directive('galleries', function($timeout) {
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/gallery-list.html',
        controller: 'GalleryCtrl',
        link: function(elem, attr, scope, ctrl) {
            
            $timeout(function() {
                $('#gallerySlider').bxSlider({
                    minSlides: 1,
                    maxSlides: 1,
                    nextSelector: '#gal-next',
                    prevSelector: '#gal-prev',
                    nextText: '<span class="fa fa-angle-right"> </span>',
                    prevText: '<span class="fa fa-angle-left"> </span>',
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