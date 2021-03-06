travelApp.factory('TestimonialFactory', function TestimonialFactory($q, $window, $http, $routeParams) {
    
    'use strict';
    
    var testimonials = {};
    
    
    var TESTIMONIAL_URL = 'http://127.0.0.1:9090/testimonials';
    
    testimonials.getAllTestimonial = function() {
        var deferred = $q.defer();
        $http.get(TESTIMONIAL_URL)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    };
    
    testimonials.addTestimonial = function(data) {
        var deferred = $q.defer();
        $http.post(TESTIMONIAL_URL, data)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    };
    
    return testimonials;
});