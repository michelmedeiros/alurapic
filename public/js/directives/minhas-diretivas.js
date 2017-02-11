angular.module('minhasDiretivas', [])
    .directive('meuPainel', function() {
        var ddo = {};

        ddo.restric = "AE";

        ddo.scope = {
            titulo: '@'
        };

        ddo.transclude = true;
        ddo.templateUrl = 'js/directives/meu-panel.html';

        return ddo;
    })
    .directive('minhaFoto', function() {
        var ddo = {};

        ddo.restric = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.templateUrl = 'js/directives/minha-foto.html';

        return ddo;
    })
    .directive('meuBotaoPerigo', function() {
        var ddo = {};
        ddo.restric = "AE";

        ddo.scope = {
            nome: '@',
            acao: '&'
        };

        ddo.templateUrl = 'js/directives/meu-botao-perigo.html';

        return ddo;
    })
    .directive('meuFocus', function() {
        var ddo = {};

        ddo.restric = "A";

        ddo.link = function(scope, element) {
            scope.$on('fotoCadastrada', function() {
                element[0].focus();
            });
        };

        return ddo;
    });
