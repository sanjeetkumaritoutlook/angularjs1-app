app.controller('MainController', function($scope,DataService) {
	 DataService.getData().then(function(response) {
		$scope.message = DataService.getData();
        $scope.data = response.data;
    });
});
