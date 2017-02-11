angular.module('alurapic').controller('FotosController', function($scope, $http, recursoFoto) {
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoFoto.query(function(fotos) {
            $scope.fotos = fotos;
        },
        function(erro) {
            console.log('Erro encontrado na requisição Get: ' + erro);
        });

    $scope.remover = function(foto) {
        recursoFoto.delete({ fotoId: foto._id }, function() {
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = "Foto excluída com sucesso!";
            },
            function(erro) {
                $scope.mensagem = "Erro ao remover foto!"
            });
    };
});
