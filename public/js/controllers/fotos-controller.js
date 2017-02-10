angular.module('alurapic').controller('FotosController', function($scope, $http) {
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    $http.get('v1/fotos')
        .success(function(data) {
            $scope.fotos = data;
        })
        .error(function(erro) {
            console.log('Erro encontrado na requisição Get: ' + erro);
        });

    $scope.remover = function(foto) {
        $http.delete('v1/fotos/' + foto._id)
            .success(function() {
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = "Foto excluída com sucesso!";
            })
            .error(function(error) {
                $scope.mensagem = "Erro ao remover foto!"
            })
    };
});
