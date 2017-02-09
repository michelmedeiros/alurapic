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
    });