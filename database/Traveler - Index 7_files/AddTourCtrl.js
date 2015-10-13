// create the controller and inject Angular's $scope
travelApp.controller('AddTourCtrl', function($scope, Upload, $timeout, AdminFactory) {
    $scope.tab = 1;
    $scope.tour = {};
    $scope.activities = {};
    $scope.cities = {};
    $scope.types = {};
    $scope.durations = {};
    $scope.inclusions = {};
    $scope.currencies = {};
    $scope.tour.inclusions = [];
    $scope.tour.exclusions = [];
    
    
    AdminFactory.getAllTourType().then(function (data) {
            $scope.activities = data.list.activities;
            $scope.cities = data.list.cities;
            $scope.types = data.list.type;
            $scope.durations = data.list.duration;
            $scope.inclusions = data.list.inclusions;
            $scope.currencies = data.list.currency;
        
        },
        function (errorMessage) {
        
        }
    );
    
    $scope.selectExclusion = function(id){
        
        var index = $scope.tour.exclusions.indexOf(id);
        if(index < 0){
            $scope.tour.exclusions.push(id);
            $(".check-exclusion").removeClass("fa-minus-circle").addClass("fa-plus-circle");
        }else{
            $scope.tour.exclusions.slice(index, 1);
            $(".check-exclusion").removeClass("fa-plus-circle").addClass("fa-minus-circle");
        }
    }
    
    $scope.selectInclusion = function(id){
        var index = $scope.tour.inclusions.indexOf(id);
        if(index < 0){
            $scope.tour.inclusions.push(id);
            $(".check-inclusion").removeClass("fa-minus-circle").addClass("fa-plus-circle");
        }else{
            $scope.tour.inclusions.slice(index, 1);
            $(".check-inclusion").removeClass("fa-plus-circle").addClass("fa-minus-circle");
        }
    }
    
    
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file]; 
        }
    });
    $scope.log = '';

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: 'http://127.0.0.1:9090/tour/upload',
                    data: {
                      file: file  
                    }
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.data.file.name + '\n' + $scope.log;
                }).success(function (data, status, headers, config) {
                    $timeout(function() {
                        $scope.tour.image = data.imagePath;
                        $scope.log = 'file: ' + config.data.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                    });
                });
              }
            }
        }
    };
    
    
    $scope.addTour = function(tour){
        $scope.tour = tour;
        
        AdminFactory.addTour($scope.tour).then(function (data) {
                
                location.href = "#/admin";
            },
            function (errorMessage) {

            }
        );
    }
});