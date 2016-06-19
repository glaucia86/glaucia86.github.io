/* Arquivo Componente 'ts' - Lista de Produtos */
System.register(['angular2/core', './product-filter.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_filter_pipe_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_filter_pipe_1_1) {
                product_filter_pipe_1 = product_filter_pipe_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent() {
                    this.pageTitle = 'Lista de Produtos';
                    this.imageWidth = 150;
                    this.imageMargin = 15;
                    this.showImage = false;
                    this.listFilter = 'produto'; /* definimos aqui uma string de modelo */
                    this.products = [
                        {
                            "productId": 1,
                            "productName": "iPhone 5S 16GB Prata Tela 4 IOS 8 4G Câmera de 8MP",
                            "productCode": "GDN-0011",
                            "releaseDate": "19 de Março de 2016",
                            "description": "Com um design fino e elegante, o iPhone 5S traz recursos avançados por um preço excelente, apresentando tela Retina de 4 polegadas, chip A7 com arquitetura de 64 bits, sensor de impressão digital Touch ID, câmera iSight de 8MP, câmera FaceTime HD, 4G LTE e Wi-Fi*, iOS 8 e iCloud.",
                            "price": 1.899,
                            "starRating": 5,
                            "imageUrl": "https://static.wmobjects.com.br/hotsite/sku-content/apple/418764/images/418764-apple-iphone-5s-16gb-prata-espacial-desbloqueado-ios7-product-image01.png"
                        }, {
                            "productId": 2,
                            "productName": "Samsung Galaxy Tab A P550",
                            "productCode": "GDN-0023",
                            "releaseDate": "19 de Junho de 2016",
                            "description": "O Samsung Galaxy Tab A P550 oferece uma experiência tecnológica incrível e altamente funcional. Com sistema operacional Android 5.0, possui tela de 9.7 polegadas para a exibição de diversos conteúdos e também conta com processador Quad Core 1.2GHz para uma navegação mais rápida e fluida.",
                            "price": 1.500,
                            "starRating": 4.2,
                            "imageUrl": "http://isuba1-a.akamaihd.net/produtos/01/00/item/122899/1/122899106_1GG.png"
                        }
                    ];
                }
                /* Método para poder carregar a imagem ao clicar no botão */
                ProductListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                ProductListComponent.prototype.ngOnInit = function () {
                    console.log('In OnInit');
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-products',
                        templateUrl: 'app/products/product-list.component.html',
                        styleUrls: ['app/products/product-list.component.css'],
                        pipes: [product_filter_pipe_1.ProductFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map