angular.module('alurapic')
    .controller('FotoController', function($scope, $http, $routeParams) {
        $scope.foto = {};
        $scope.mensagem = '';

        if ($routeParams.fotoId) {
            $http.get('v1/fotos/' + $routeParams.fotoId)
                .success(function(foto) {
                    $scope.foto = foto;
                })
                .error(function(erro) {
                    $scope.mensagem = 'Não foi possível encontrar a foto';
                });
        }


        $scope.submeter = function() {
            if ($scope.formulario.$valid) {
                if ($scope.foto._id) {
                    $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                        .success(function() {
                            $scope.mensagem = "Foto atualizada com sucesso";
                        })
                        .error(function(erro) {
                            $scope.mensagem = "Erro na atualização dos dados." + erro;
                        })

                } else {
                    $http.post('v1/fotos', $scope.foto)
                        .success(function() {
                            $scope.mensagem = "Foto gravada com sucesso";
                            $scope.foto = {};
                        })
                        .error(function(erro) {
                            $scope.mensagem = "Erro na gravação dos dados." + erro;
                        })

                }
            }
        };
    });
