angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/novo.html',
            controller: 'FotoController'
        });

        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/novo.html',
            controller: 'FotoController'
        });
        $routeProvider.when('/grupos', {
            templateUrl: 'partials/novo.html',
            controller: 'GruposController'
        });

        $routeProvider.otherwise({ redirectTo: '/fotos' });
    });
