// create the controller and inject Angular's $scope
travelApp.controller('SpecialTourCtrl', function($scope, $http, $location, TourFactory) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.$on('onRepeatLast', function(scope, element, attrs){
          //work your magic   
        $('#tourSlider').bxSlider({
            minSlides: 1,
            maxSlides: 3,
            nextSelector: '#tours-next',
            prevSelector: '#tours-prev',
            nextText: '<span class="fa fa-angle-right"> </span>',
            prevText: '<span class="fa fa-angle-left"> </span>',
            auto: false,
            slideWidth: 350,
            slideMargin: 50,
            captions: false,
            responsive: true,
            pager: false
        });   
    }); 
                   
    $scope.tours = [];
    
    TourFactory.getSpecialTours().then(function (data) {
        $scope.tours = data.tours;
    },
    function (errorMessage) {
        alert("222");
    });
    
    $scope.filterFunction = function(element) {
        return element.name.match(/^Ma/) ? true : false;
    };
    
    $scope.ViewDetail = function(obj){
        var id = obj.target.attributes.data.value;
        location.href = "#/tour/"+id;
    }
    
});