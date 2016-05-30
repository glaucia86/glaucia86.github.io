(function() {
	var app = angular.module('store-directives', []);

  /* Diretiva das Descrições dos Produtos */
  app.directive('productDescription', function() {
    
    /*- Por 'elementos' */
    return {
      restrict: 'E',
      templateUrl: 'product-descriptions.html'
    };
  });

  /* Diretiva das Reviews dos Produtos */
  app.directive('productReviews', function() {

    /*- Por 'elementos' */
    return {
      restrict: 'E',
      templateUrl: 'product-reviews.html'
    };
  });

  /* Diretiva das Especificações dos Produtos */
  app.directive('productSpecs', function() {

    /* - Por 'atributos' */
    return {
      restrict: 'A',
      templateUrl: 'product-specs.html'
    };
  });

  /* Diretiva para as Tab's */
  app.directive('productTabs', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-tabs.html',
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(setTab) {
          this.tab = setTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  /* Diretiva para a Galeria de Imagens */
  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber) {
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });
})();