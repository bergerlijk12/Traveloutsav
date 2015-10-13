travelApp.factory('TourFactory', function TourFactory($q, $window, $http, $routeParams) {
    
    'use strict';
    
    var tours = {};
    var deferred = $q.defer();
    
    var TOUR_URL = 'http://127.0.0.1:9090/tours';
    var IND_TOUR_URL = 'http://127.0.0.1:9090/tour';
    var QUERY_URL = 'http://127.0.0.1:9090/query';
    
    tours.getSpecialTours = function() {
        var deferred = $q.defer();
        $http.get(TOUR_URL)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    };
    
    tours.getTours = function() {
        //var deferred = $q.defer();
        $http.get(TOUR_URL)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    };
        
    tours.getDetailTour = function(params) {
        
        //var deferred = $q.defer();
        $http.get(IND_TOUR_URL + '/' + params.id)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    };
    
    tours.addTour = function(data) {
        
        $http.post(TOUR_URL, data)
        .success(function(response){
            deferred.resolve(response);
        }).error(function(response){
            deferred.reject(response);
        });
        
        return deferred.promise;
    };
    
    tours.deleteTour = function(param) {
        
        $http.delete(IND_TOUR_URL + '/' + param.id)
        .success(function(response){
            deferred.resolve(response);
        }).error(function(response){
            deferred.reject(response);
        });
        
        return deferred.promise;
    };
    
    tours.modifyTour = function(data, headers) {
        
        $http.put(TOUR_URL, data, headers)
        .success(function(response){
            deferred.resolve(response);
        }).error(function(response){
            deferred.reject(response);
        });
        
        return deferred.promise;
    };
    
    tours.addQuery = function(data, headers) {
        
        $http.post(QUERY_URL, data, headers)
        .success(function(response){
            deferred.resolve(response);
        }).error(function(response){
            deferred.reject(response);
        });
        
        return deferred.promise;
    };
    
    tours.makeSpecialTours = function(id) {
        
        $http.put(IND_TOUR_URL+"/"+id)
        .success(function(response){
            deferred.resolve(response);
        }).error(function(response){
            deferred.reject(response);
        });
        
        return deferred.promise;
    };
    
    return tours;
});