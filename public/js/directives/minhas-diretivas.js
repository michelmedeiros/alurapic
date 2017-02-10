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
<<<<<<< HEAD
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao: '&'
        }
=======

        ddo.restric = "AE";

        ddo.scope = {
            nome: '@',
            acao: '&'
        };

>>>>>>> 2c9e8bf90060ac6ac354cdddcc5224ad5bb2f4a2
        ddo.templateUrl = 'js/directives/meu-botao-perigo.html';

        return ddo;
    });
