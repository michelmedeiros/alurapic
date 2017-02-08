angular.module('alurapic').controller('FotosController', function($scope, $http) {
    $scope.fotos = [];
    $scope.filtro = '';
    $http.get('v1/fotos')
        .success(function(data) {
            $scope.fotos = data;
        })
        .error(function(erro) {
            console.log('Erro encontrado na requisição Get: ' + erro);
        });
});
