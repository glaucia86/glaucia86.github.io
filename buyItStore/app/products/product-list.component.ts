/* Arquivo Componente 'ts' - Lista de Produtos */

import { Component, OnInit } from 'angular2/core';
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe'
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';

@Component ({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent]
})

/* Classe em .ts que corresponde aos atributos relacionados aos Produtos */
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Lista de Produtos';
    imageWidth: number = 150;
    imageMargin: number = 15;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {

    }

    /* Método para poder carregar a imagem ao clicar no botão */
    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    ngOnInit() : void {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
            error => this.errorMessage = <any>error)
    }

    onRatingClicked(message: string) : void {
        this.pageTitle = 'Lista de Produtos: ' + message;
    }
}