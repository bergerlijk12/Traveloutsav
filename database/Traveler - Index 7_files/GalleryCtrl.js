// create the controller and inject Angular's $scope
travelApp.controller('GalleryCtrl', function($scope, $http, $location, GalleryFactory) {
    
    GalleryFactory.getAllGalleries().then(function (data) {
        $scope.galleries = data.galleries;
    },
    function (errorMessage) {
        alert("222");
    });
    
});