(function() {
	var app = angular.module('gemStore', []);

  /* Diretiva da Galeria de Imagens */
  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function() {
        this.current = 0;

        /* Função para poder 'setar' as imagens dos produtos */
        this.setCurrent = function(imageNumber) {
        this.current = imagerNumber || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });

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

  /* Diretiva da Descrição do Produto */
  app.directive('productDescriptions', function() {
      return {
        restrict: 'E',
        templateUrl: 'product-description.html'
      };
  });

  /* Diretiva das Revies do Produto */
  app.directive('productReviews', function() {
      return {
        restrict: 'E',
        templateUrl: 'product-reviews.html'
      };
  });

  /* Diretiva da Especificação do Produto */
  app.directive('productSpecs', function() {
      return {
        restrict: 'A',
        templateUrl: 'product-specs.html'
      };
  });

  /* Diretiva das Tabs sobre o Produto */
  app.directive('productTabs', function() {
      return {
        retrisct: 'E',
        templateUrl: 'product-tabs.html',
        controller: function() {
          this.tab = 1;

          /* Função para poder atribuir a tab de acordo com o nome da Tab clicada. */
          this.isSet = function(checkTab) {
            return this.tab === checkTab
          };

          /* Função para poder 'setar' uma tab */
          this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: 'tab'
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