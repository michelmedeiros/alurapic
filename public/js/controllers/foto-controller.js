angular.module('alurapic')
    .controller('FotoController', function($scope, $http) {
        $scope.foto = {};
        $scope.mensagem = '';
        $scope.submeter = function() {
            if ($scope.formulario.$valid) {
                console.log($scope.foto);
                $http.post('v1/fotos', $scope.foto)
                    .success(function() {
                        $scope.mensagem = "Foto gravada com sucesso";
                        $scope.foto = {};
                    })
                    .error(function(erro) {
                        $scope.mensagem = "Erro na gravação dos dados." + erro;
                    })
            }
        };

    });
