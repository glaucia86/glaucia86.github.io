(function() {
    var app = angular.module('store-directives', []);

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
})();