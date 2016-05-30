(function() {
	var app = angular.module('gemStore', ['store-directives']);

  /* Controlador dos Produtos */
	app.controller('StoreController', ['$http', function($http) {
		var store = this;

    store.products = [];

    /* Método 'Get' para poder pegar as informações contidas no array de produtos */
    $http.get('/store-products.json').success(function(data){
      store.products = data;
    });
	}]);

  /* Controlador das Reviews dos produtos */
  app.controller('ReviewController' , function() {

    this.review = {};

    /* Função para poder adicionar uma nova review de um determinado produto */
    this.addReview = function(product) {
      
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);

      /* Limpar os campos das reviews */
      this.review = {};
    };
  });
})();