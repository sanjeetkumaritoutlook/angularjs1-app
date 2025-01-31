app.service('DataService', function($http) {
    this.getData = function() {
        return $http.get('/data.json')  // Assuming data.json is in the root folder
            .then(function(response) {
                return response.data;  // Return the actual data from the response
            });
    };
});
