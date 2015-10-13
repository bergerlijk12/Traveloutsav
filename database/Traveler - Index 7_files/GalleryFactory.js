travelApp.factory('GalleryFactory', function GalleryFactory($q, $window, $http, $routeParams) {
    
    'use strict';
    
    var testimonials = {};
    
    
    var GALLERY_URL = 'http://127.0.0.1:9090/gallery';
    
    testimonials.getAllGalleries = function() {
        var deferred = $q.defer();
        $http.get(GALLERY_URL)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    };
    
    testimonials.detailGallery = function(id) {
        var deferred = $q.defer();
        $http.get(GALLERY_URL+"/"+id)
            .success(function(data) {
                console.log(data);
                deferred.resolve(data);
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    };
    
    return testimonials;
});