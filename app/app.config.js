app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
