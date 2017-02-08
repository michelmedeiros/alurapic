angular.module('panelDiretiva', []).directive('meuPainel', function() {
    var ddo = {};

    ddo.restric = "AE";

    ddo.scope = {
        titulo: '@'
    };

    ddo.transclude = true;
    ddo.templateUrl = 'js/directives/meu-panel.html';

    return ddo;
});
