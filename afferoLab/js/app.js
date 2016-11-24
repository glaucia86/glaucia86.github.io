var app = angular.module('afferoLab', []);

app.directive('quiz', function(quizFactory) {
    return {
        restrict: 'AE',
        scope: {},
        templateUrl: 'template.html',
        link: function(scope, elem, attrs) {
            /* Função responsável por inicializar o contador dos id's' contidos dentro
                 array */
            scope.start = function() {
                scope.id = 0;
                scope.quizOver = false;
                scope.inProgress = true;
                scope.getQuestion();
            };

            
        }
    }
});