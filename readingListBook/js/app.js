'use strict';

(function(){

	/*Declaração do módulo da aplicação */
	angular.module('readingListBook', [])

	/* Controlador responsável pela leitura de dados dos Livros */
	.controller('ReadingListController', function() {
		this.genres = genres;
		this.books = books;
	})

	.directive('bookGenres', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/book-genres.html'
		}
	})

	.directive('bookCover', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/book-cover.html',
			replace: true
		}
	});


	/* Declaração de dados de exemplo a serem inseridos no projeto */
	var genres = ['fantasia', 'ficção', 'fábulas', 'infantis', 'romance', 'folclore', 'horror', 'lenda', 'mistério', 'mitologia', 'não-ficção', 'poesia', 'romance'];

	/* Dados de Livros */
	var books = [
		{
			title: 'A Game of Thrones: A Song of Ice and Fire',
			author: 'George R.R. Martin',
			isbn: '0553593714',
			review: 'A saga mais criativa e divertida dos últimos tempos - garante uma grande introdução ao mundo da fantasia. Eu amei esse livro!',
			rating: 4,
			genres: { 'não-ficção': true, fantasy: true }
		}, {
			title: 'HTML for Babies',
			author: 'John C Vanden-Heuvek Sr',
			isbn: '0615487661',
			review: 'Nunca é cedo demais para aprender as novas normas compatíveis! Eu aprendi a realizar o meu primeiro mark-up em menos de uma hora!',
			rating: 5,
			genres: { fiction: true }	
		}, {
			title: 'A is for Array',
			author: 'Brandon J Hansen',
			isbn: '1489522212',
			review: 'O livro: A is for Array é literalmente o ABC para futuros programadores. Cheio de ilustrações divertidas e simples exemplos de casos reais.',
			rating: 4,
			genres: { fiction: true }
		}, {
			title: 'The Dragon Reborn',
			author: 'Robert Jordan',
			isbn: '0812513711',
			review: 'A Roda acompanha como a roda quer e nós somos apenas o segmento do padrão.',
			rating: 4,
			genres: { 'não-ficção': true, fantasy: true }
		}
	];
})();