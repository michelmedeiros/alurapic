angular.module('alurapic')
    .controller('GruposController', function($scope, $http) {
        $scope.grupos = {};
        $scope.mensagem = '';

        $http.get('v1/grupos')
            .success(function(grupo) {
                $scope.grupos = grupo;
            })
            .error(function(erro) {
                $scope.mensagem = 'Não foi possível encontrar os grupos';
            });
    });
