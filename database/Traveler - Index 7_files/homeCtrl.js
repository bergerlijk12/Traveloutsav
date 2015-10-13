// create the controller and inject Angular's $scope
travelApp.controller('HomeCtrl', function($scope, $http, $location, TourFactory, userFactory) {
    
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    
    // Owl Carousel
        var owlCarousel = $('#owl-carousel'),
            owlItems = owlCarousel.attr('data-items'),
            owlCarouselSlider = $('#owl-carousel-slider'),
            owlNav = owlCarouselSlider.attr('data-nav');
        // owlSliderPagination = owlCarouselSlider.attr('data-pagination');

        owlCarousel.owlCarousel({
            items: owlItems,
            navigation: true,
            navigationText: ['', '']
        });

        owlCarouselSlider.owlCarousel({
            slideSpeed: 300,
            paginationSpeed: 400,
            // pagination: owlSliderPagination,
            singleItem: true,
            navigation: true,
            navigationText: ['', ''],
            transitionStyle: 'fade',
            autoPlay: 4500
        });
    
        $scope.countries = [{name: "Delhi"},{name: "Agra"},{name: "Mumbai"},{name: "Jaipur"},{name: "Maharastra"},{name: "Utter Pradesh"},{name: "Rajasthan"}]
                                                                                                                                                                                                                       
        $scope.callback = function(country){
            $scope.country = country
        }
        
        $scope.SearchTour = function($scope){
            var place = $("#searchBox").val();
            location.href = "#/tours/";
        }
    
        $('.date').datepicker({
                    weekStart: 2,
                    startDate: "01/10/2013",
                    endDate: "01/12/2013"
        });
    
    
    
        /*TourFactory.getSpecialTours()
            .then( angular.bind(this, function then(){
                $scope.tours = TourFactory.data;
            }) 
        );*/
    
        $scope.login = function(user){
            
            userFactory.login(user).then(function(data){
                alert(JSON.stringify(data));
            }),
            function (errorMessage) {
                alert("222");
            };
        }
    
});