travelApp.directive('addGallery', function() {
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/add-gallery.html',
        controller: 'GalleryCtrl',
        link: function(elem, attr, scope, ctrl) {
            
            
        }
    }
});