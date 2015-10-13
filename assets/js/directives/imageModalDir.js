travelApp.directive('imageModal', function(){
    
    return{
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/image-slider.html',
        controller: 'imageModalCtrl',
        link: function(elem, attr, scope, ctrl){
             $('#imageSlider').bxSlider({
                        minSlides: 1,
                        maxSlides: 1,
                        auto: true,
                        slideWidth: 350,
                        slideMargin: 50,
                        captions: true,
                        responsive: true,
                        pager: true
                    }); 
        }
    }
});