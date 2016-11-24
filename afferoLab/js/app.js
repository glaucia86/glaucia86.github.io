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

app.factory('quizFactory', function() {
    var questions = [
        {
            question: "Qual a capital de Pernambuco?",
            options: ["Salvador", "Natal", "Recife", "Fortaleza", "Amapá"],
            answer: 2
        },
        {
            question: "Qual desses Países não é Europeu?",
            options: ["Macedonia", "Espanha", "Polonia", "Casaquistão", "França" ],
            answer: 3
        },
        {
            question: "Qual desses não é uma ilha?",
            options: ["Libia", "Bermudas", "Barbados", "Haiti", "Madagascar" ],
            answer: 0
        },

        {
            question: "Além da Turquia, qual outro país está presente em dois continentes?",
            options: ["Libia", "Rússia", "Polonia", "Casaquistão", "China" ],
            answer: 1
        },
        {
            question: "Qual desses países não é africano?",
            options: ["Madagascar", , "Polonia", "Egito", "Africa do Sul", "Ruanda" ],
            answer: 1
        }
    ];

    return {
        getQuestion: function(id) {
            if(id < question.length) {
                return questions[id];
            } else {
                return false;
            }
        }
    };
});
