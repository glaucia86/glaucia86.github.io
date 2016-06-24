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
     <footer>
      <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-lg-8">
                <h3 class="white-text">Informações da Empresa:</h3>
                <p class="white-text">We are a team of college students working on this project like it's our full time job.</p>
            </div>
            <div class="col-xs-6 col-lg-4">
                <h3 class="white-text">Gostou? Entre em Contato!</h3>
                <ul class="social">
                    <li><a href="https://br.linkedin.com/in/glaucialemos"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/glaucia86"><i class="fa fa-github-alt" aria-hidden="true"></i></a></li>
                    <li><a href="https://code4coders.wordpress.com/"><i class="fa fa-wordpress" aria-hidden="true"></i></a></li>
                    <li><a href="https://twitter.com/glaucia_lemos86"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="https://goo.gl/XpCF3q"><i class="fa fa-youtube-square" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="footer.footer-copyright">
            <div class="container">
            Developed by <a href="www.code4coders.wordpress.com">Glaucia Lemos</a>
            </div>
        </div>
      </div>
    </footer>
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