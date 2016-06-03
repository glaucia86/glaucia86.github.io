'use strict';

(function() {

// Declare app level module which depends on views, and components
var app = angular.module('readingListBook', []);

/* Controlador responsável pela leitura dos Dados dos Livros */
app.controller('ReadingListController', function(){
	this.books = books;
	this.genres = genres;
});

	/* Os dados de exemplo a serem inseridos aqui - Gêneros de Livros */
	var genres = ['fantasia', 'ficção', 'fábula', 'folclore', 'horror', 'lenda', 'metaficção', 'mistério', 'mitologia', 'não-ficção', 'poesia'];

	/*Dados de exemplo - Livros */
	var books = [
		{
			title: 'A Game of Thrones: A Song of Ice and Fire',
			author: 'George R.R. Martin',
			isbn: '0553593714',
			img: '51Y82FEgx7L',
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
