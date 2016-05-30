(function() {
	var app = angular.module('gemStore', ['store-directives']);

  /* Controlador dos Produtos */
	app.controller('StoreController', function() {
		this.products = gems;
	});

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
	
var gems = [
    {
      name: 'Azurita',
      description: "Algumas pérolas tem as suas qualidades escondidas que vão além do seu brilho. E Azurita é uma dessas jóias.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      reviews: [{
        stars: 5,
        body: "Eu simplesmente amo essa joia!",
        author: "skinclear86@gmail.com",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Esta joia é muito ruim!",
        author: "jake@gmail.com",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Plasma',
      description: "A origem da Plasma é desconhecida, por isso o seu baixo valor. Porém, apresenta um brilho sensacional em seus 12 lados.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif"
      ],
      reviews: [{
        stars: 3,
        body: "Eu acho essa joia relativamente boa, poderia ter mais brilho...",
        author: "jurema@gmail.com",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Ah! Qualquer joia de 12 lados, simplesmente é a minha cara!",
        author: "marcinha@gmail.com",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Zircão',
      description: "Zircão é uma das joias mais cobiçadas por todos. Você com certeza irá pagar muito caro por ela. Mas, pode ter certeza que sendo um proprietário desta jóia te deixará com muito mais brilho.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "images/gem-06.gif",
        "images/gem-07.gif",
        "images/gem-08.gif"
      ],
      reviews: [{
        stars: 1,
        body: "Essa joia é muito cara devido a sua raridade!",
        author: "bruno@gmail.com",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Um conselho: Muito brilho != Alta qualidade!",
        author: "luis@gmail.com",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Gente! Não perda dinheiro comprando essa jóia!",
        author: "lia@gmail.com",
        createdOn: 1397490980837
      }]
    }];
})();