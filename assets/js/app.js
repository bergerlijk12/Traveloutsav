/*var interceptor = function($q){
    
    return {
        request: function(config){
            console.log("Came here");
            $('#loadingWidget').show();
        },
        
        response: function(result){
            console.log(result);
            $('#loadingWidget').show();
        },
        
        responseError: function(rejection){
            console.log("Failed with ");
        }
    }
}*/


var travelApp = angular.module('travelApp', ['ngRoute', 'ngResource', 'ngFileUpload']);


// configure our routes
travelApp.config(function($routeProvider, $locationProvider, $httpProvider) {
    
    var $http,
        interceptor = function ($q, $injector) {
            var rootScope;

            function success(response) {
                alert("1");
                // get $http via $injector because of circular dependency problem
                $http = $http || $injector.get('$http');
                // don't send notification until all requests are complete
                if ($http.pendingRequests.length < 1) {
                    // get $rootScope via $injector because of circular dependency problem
                    rootScope = rootScope || $injector.get('$rootScope');
                    // send a notification requests are complete
                    rootScope.$broadcast("_END_REQUEST_");
                }
                return response;
            }

            function error(response) {
                // get $http via $injector because of circular dependency problem
                $http = $http || $injector.get('$http');
                // don't send notification until all requests are complete
                if ($http.pendingRequests.length < 1) {
                    // get $rootScope via $injector because of circular dependency problem
                    rootScope = rootScope || $injector.get('$rootScope');
                    // send a notification requests are complete
                    rootScope.$broadcast("_END_REQUEST_");
                }
                return $q.reject(response);
            }

            return function (promise) {
                // get $rootScope via $injector because of circular dependency problem
                rootScope = rootScope || $injector.get('$rootScope');
                // send notification a request has started
                rootScope.$broadcast("_START_REQUEST_");
                return promise.then(success, error);
            }
        };

    $httpProvider.interceptors.push(interceptor);
            
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'templates/home.html',
            controller  : 'HomeCtrl'
        })

        // route for the about page
        .when('/aboutus', {
            templateUrl : 'templates/about-us.html',
            controller  : 'AboutCtrl'
        })

        // route for the contact page
        .when('/tours', {
            templateUrl : 'templates/day-tours.html',
            controller  : 'ToursCtrl'
        })
        
        // route for the contact page
        .when('/contactus', {
            templateUrl : 'templates/contact-us.html',
            controller  : 'ContactCtrl'
        })
        
        // route for the contact page
        .when('/tour/:id', {
            templateUrl : 'templates/tour-details.html',
            controller  : 'TourDetailsCtrl'
        })
        
        // route for the contact page
        .when('/testimonials', {
            templateUrl : 'templates/testimonials.html',
            controller  : 'TestimonialsCtrl'
        })
        
        // route for the contact page
        .when('/admin', {
            templateUrl : 'templates/admin.html',
            controller  : 'AdminCtrl'
        })
        
        // route for the contact page
        .when('/tours/editleftMenu.html', {
            templateUrl : 'templates/details.html',
            controller  : 'contactCtrl'
        })
        .otherwise("/");
            
        
});

// create the controller and inject Angular's $scope
travelApp.controller('mainController', function($scope, $location, userFactory) {
    $scope.user = {};
    $scope.isAdmin = false;
    if(localStorage.getItem("userInfo") != null){
        $scope.isAdmin = true;
    }
    $('ul.slimmenu').slimmenu({
        resizeWidth: '992',
        collapserTitle: 'Main Menu',
        animSpeed: 250,
        indentChildren: true,
        childrenIndenter: ''
    });
    
    $scope.isActive = function (viewLocation) {
         var active = (viewLocation === $location.path());
         return active;
    };
    
    $scope.login = function(user){
         userFactory.login(user).then(function(data){
            $scope.user = data.user[0];
             localStorage.setItem("userInfo", JSON.stringify($scope.user));
             $scope.isAdmin = true;
        }),
        function (errorMessage) {
        };
    }
    
    $scope.isAdminUser = function () {
         var active = $scope.isAdmin;
         return active;
    };
    
    $scope.signOut = function(){
        localStorage.setItem("userInfo", null);
        $scope.isAdmin = false;
    }
});


travelApp.directive('loadingWidget', function () {
    return {
        restrict: "A",
        link: function (scope, element) {
            // hide the element initially
            element.hide();

            scope.$on("_START_REQUEST_", function () {
                // got the request start notification, show the element
                element.show();
            });

            scope.$on("_END_REQUEST_", function () {
                // got the request end notification, hide the element
                element.hide();
            });
        }
    };
});