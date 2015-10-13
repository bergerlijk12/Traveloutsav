travelApp.factory('userFactory', function userFactory($q, $window, $http, $routeParams) {
    
    'use strict';
    
    var user = {};
    
    
    var GALLERY_URL = 'http://127.0.0.1:9090/login';
    
    user.login = function(data) {
        var deferred = $q.defer();
        $http.post(GALLERY_URL, data)
            .success(function(response) {
                deferred.resolve(response);
            })
            .error(function(response) {
                deferred.reject(response);
            });
        return deferred.promise;
    };
    
    return user;
});