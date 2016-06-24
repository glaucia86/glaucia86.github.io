System.register(['@angular/core', '@angular/http', 'rxjs/Rx', '@angular/router', './products/product-list.component', './products/product.service', './home/welcome.component', './products/product-detail.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, product_list_component_1, product_service_1, welcome_component_1, product_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Buy it! A sua compra certa!';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        template: "\n    <div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                    <li><a [routerLink]=\"['/welcome']\">P\u00E1gina Inicial</a></li>\n                    <li><a [routerLink]=\"['/products']\">Lista de Produtos</a></li>\n                </ul>\n            </div>\n        </nav>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n     </div>\n     <footer>\n      <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-lg-8\">\n                <h3 class=\"white-text\">Informa\u00E7\u00F5es da Empresa:</h3>\n                <p class=\"white-text\">We are a team of college students working on this project like it's our full time job.</p>\n            </div>\n            <div class=\"col-xs-6 col-lg-4\">\n                <h3 class=\"white-text\">Gostou? Entre em Contato!</h3>\n                <ul class=\"social\">\n                    <li><a href=\"https://br.linkedin.com/in/glaucialemos\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n                    <li><a href=\"https://github.com/glaucia86\"><i class=\"fa fa-github-alt\" aria-hidden=\"true\"></i></a></li>\n                    <li><a href=\"https://code4coders.wordpress.com/\"><i class=\"fa fa-wordpress\" aria-hidden=\"true\"></i></a></li>\n                    <li><a href=\"https://twitter.com/glaucia_lemos86\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n                    <li><a href=\"https://goo.gl/XpCF3q\"><i class=\"fa fa-youtube-square\" aria-hidden=\"true\"></i></a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"footer.footer-copyright\">\n            <div class=\"container\">\n            Developed by <a href=\"www.code4coders.wordpress.com\">Glaucia Lemos</a>\n            </div>\n        </div>\n      </div>\n    </footer>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [product_service_1.ProductService,
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.Routes([
                        /* Aqui estamos definindo as rotas das páginas: 'Bem-Vindo' e 'Lista de Produtos'.
                            Porém estamos definindo aqui a página 'Bem-Vindo' como default. */
                        { path: '', component: welcome_component_1.WelcomeComponent },
                        { path: '/welcome', component: welcome_component_1.WelcomeComponent },
                        { path: '/products', component: product_list_component_1.ProductListComponent },
                        { path: '/product/:id', component: product_detail_component_1.ProductDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map