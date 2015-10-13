travelApp.factory('ContactFactory', function AdminFactory($q, $window, $http, $routeParams) {
    
    'use strict';
    
    var contact = {};
    var deferred = $q.defer();
    
    var CONTACT_URL = 'http://127.0.0.1:9090/contact';
    
    contact.AddQuery = function(request) {
        var deferred = $q.defer();
        $http.post(CONTACT_URL, request)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    };
    
    
    return contact;
});