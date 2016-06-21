import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; /* Para poder carregar todos os features */
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';


import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Página Inicial</a></li>
                    <li><a [routerLink]="['Products']">Lista de Produtos</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
     </div>
    ` ,
    directives: [ROUTER_DIRECTIVES],
    providers:  [ProductService,
                HTTP_PROVIDERS, 
                ROUTER_PROVIDERS]
})

/* Aqui no Componente 'RouteConfig' definimos as rotas das páginas */
@RouteConfig([
    /* Aqui estamos definindo as rotas das páginas: 'Bem-Vindo' e 'Lista de Produtos'. 
        Porém estamos definindo aqui a página 'Bem-Vindo' como default. */
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/products', name: 'Products', component: ProductListComponent },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }
])

export class AppComponent {
    pageTitle: string = 'Buy it! A sua compra certa!';
}