(function() {
    var ZXCVBN_SRC = 'bower_components/zxcvbn/dist/zxcvbn.js';

    var async_load = function() {
        var primeiroElemento, scrt;

        /* Criando um elemento <script> para ser usado pelo DOM API*/
        scrt = document.createElement('script');

        /* Iniciar os atributos no elemento script */
        scrt.src = ZXCVBN_SRC;
        scrt.type = 'text/javascript';
        scrt.async = true; //async é um atributo do HTML5

        /* Agora aqui nós vamos pegar o primeiro elemento do script no documento */
        primeiroElemento = document.getElementsByTagName('script')[0];

        /* Em seguida vamos inserir o elemento <script> antes do primeiro elemento no documento */
        return primeiroElemento.parentNode.insertBefore(scrt, primeiroElemento);
    };

    /* Agora... vamos adicionar o async_load como callback para o evento window load */
    if (window.attachEvent != null) {
        window.attachEvent('onload', async_load);
    } else {
        window.addEventListener('load', async_load, false);
    }
}).call(this);


/* Criando um módulo da aplicação */
angular.module('SenhaSegura', []);

/* Aqui estamos adicionando o controle do módulo criado */
angular.module('SenhaSegura').controller('FormController',function($scope) {});

/** Criando um filtro para tamanhoSenha */
angular.module('SenhaSegura').filter('tamanhoSenha', [function() {
    return function(valor, maximo) {
        var valor = angular.isString(valor) ? valor : '', 
        maximo = isFinite(maximo) ? maximo : 7;

        return valor && (valor.length > maximo ? maximo + '+' : valor.length);
    };
}]);

/* Criando aqui um serviço para a funcionalidade zxcvbn() */
angular.module('SenhaSegura').factory('zxcvbn', [function(){
    return {
        score: function() {
            var count = zxcvbn.apply(null, arguments);
            return count && count.score;
        }
    };
}]);

/* Criando aqui uma diretiva para o 'senhaOk' como dependência do 'zxcvbn' */
angular.module('SenhaSegura').directive('senhaOk', ['zxcvbn', function(zxcvbn) {
    return {
        // restrict to only attribute and class
        restrict: 'AC',

        // use the NgModelController
        require: 'ngModel',

        // add the NgModelController as a dependency to your link function
        link: function($scope, $element, $attrs, ngModelCtrl) {
            $element.on('blur change keydown', function(evt) {
                $scope.$evalAsync(function($scope) {
                    // update the $scope.password with the element's value
                    var senha = $scope.senha = $element.val();

                    // resolve password strength score using zxcvbn service
                    $scope.senhaSegura = senha ? (senha.length > 7 && zxcvbn.score(senha) || 0) : null;

                    // define the validity criterion for okPassword constraint
                    ngModelCtrl.$setValidity('senhaOk', $scope.senhaSegura >= 2);
                });
            });
        }
    };
}]);