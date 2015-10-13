travelApp.directive('adminGallery', function() {
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/admin-gallery-list.html',
        controller: 'GalleryCtrl',
        link: function(elem, attr, scope, ctrl) {
            
            
        }
    }
});