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

            /* Função responsável por resetar as Perguntas do Projeto */
            scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

            /* Função responsável por pegar as perguntas, as opções dadas e consequentemente 
                as respostas. */
            scope.getQuestion = function() {
                var q = quizFactory.getQuestion(scope.id);
                if(q) {
                    scope.question      = q.question;
                    scope.options       = q.options;
                    scope.answer        = q.answer;
                    scope.answerMode    = true;
                } else {
                    scope.quizOver = true;
                }
            };

            /* Função responsável por verificar a resposta correta */
            scope.checkAnswer = function() {
                if(!$('input[name=answer]:checked').length)
                    return;
                
                var ans = $('input[name=answer]:checked').val();

                /* Se a resposta selecionada for igual a opção correta então... */
                if(ans == scope.options[scope.answer]) {
                    scope.correctAns = true;
                } else {
                    scope.correctAns = false;
                }

                scope.answerMode = false;
            };

            /* Função responsável por passar para a próxima pergunta  */
            scope.nextQuestion = function() {
                scope.id++;
                scope.getQuestion();
            }

            scope.reset();
        }
    }
});