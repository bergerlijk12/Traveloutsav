travelApp.directive('addGallery', function() {
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/add-gallery.html',
        controller: 'addGalleryCtrl',
        link: function(elem, attr, scope, ctrl) {
            
            alert("444");
        }
    }
});