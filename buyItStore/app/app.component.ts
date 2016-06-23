import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; /* Para poder carregar todos os features */
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';


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
                    <li><a [routerLink]="['/welcome']">Página Inicial</a></li>
                    <li><a [routerLink]="['/products']">Lista de Produtos</a></li>
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

/* Aqui no Componente 'Routes' definimos as rotas das páginas */
@Routes([
    /* Aqui estamos definindo as rotas das páginas: 'Bem-Vindo' e 'Lista de Produtos'. 
        Porém estamos definindo aqui a página 'Bem-Vindo' como default. */
    { path: '', component: WelcomeComponent },
    { path: '/welcome', component: WelcomeComponent },
    { path: '/products', component: ProductListComponent },
    { path: '/product/:id', component: ProductDetailComponent }
])

export class AppComponent {
    pageTitle: string = 'Buy it! A sua compra certa!';
}