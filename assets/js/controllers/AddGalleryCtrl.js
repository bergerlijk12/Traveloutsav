// create the controller and inject Angular's $scope
travelApp.controller('addGalleryCtrl', function($scope, Upload, $timeout, AdminFactory) {
    
    $scope.gallery = {};
    $scope.gallery.images = [];
    $scope.image = {};
    
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
                    url: 'http://127.0.0.1:9090/gallery/upload',
                    data: {
                      file: file  
                    }
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.data.file.name + '\n' + $scope.log;
                }).success(function (data, status, headers, config) {
                    $timeout(function() {
                        $scope.image.path = data.imagePath;
                        $scope.image.caption = "";
                        $scope.gallery.images.push($scope.image);
                        alert(JSON.stringify($scope.gallery.images));
                        $scope.log = 'file: ' + config.data.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                    });
                });
              }
            }
        }
    };
    
    
    $scope.AddGallery = function(gallery){
        
        $scope.gallery = gallery;
        
        AdminFactory.addGallery($scope.gallery).then(function (data) {
                
                location.href = "#/admin";
            },
            function (errorMessage) {

            }
        );
    };
});