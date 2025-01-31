app.service('DataService', function($http) {
    this.getData = function() {
        return $http.get('/data.json').then(function(response) {
            return response.data; // Extract actual data
        });
    };
});
