travelApp.factory('AdminFactory', function AdminFactory($q, $window, $http, $routeParams) {
    
    'use strict';
    
    var admin = {};
    var deferred = $q.defer();
    
    var ADMIN_URL = 'http://127.0.0.1:9090/admin';
    
    admin.getAllTourType = function() {
        var deferred = $q.defer();
        $http.get(ADMIN_URL+"/tours/type")
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    };
    
    
    admin.addTour = function(data) {
        var deferred = $q.defer();
        $http.post(ADMIN_URL+"/tour", data)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    };
    
    
    
    return admin;
});