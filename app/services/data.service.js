app.service('DataService', function($http) {
    this.getData = function() {
        return $http.get('data.json');
    };
});
