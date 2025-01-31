app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'MainController'
    })
    .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
