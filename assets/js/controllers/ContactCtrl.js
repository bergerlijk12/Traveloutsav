// create the controller and inject Angular's $scope
travelApp.controller('ContactCtrl', function($scope, $http, $location, ContactFactory) {
    
    $scope.AddQuery = function(contact){
        
        ContactFactory.AddQuery(contact).then(function (data) {

            },
            function (errorMessage) {

            }
        );
    }
    
});

