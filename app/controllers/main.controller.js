app.controller('MainController', function($scope, DataService) {
    $scope.data = {};  // This will hold the fetched data
	$scope.message = "From main controller"
	    // Fetch data from DataService -> then show in views/home.html (as per appconfig file)
    DataService.getData().then(function(data) {
        $scope.data = data;
    }).catch(function(error) {
        console.error("Error loading data:", error);
    });
});
