/* Arquivo Componente 'ts' - Lista de Produtos */

import { Component } from 'angular2/core';

@Component ({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})

/* Classe em .ts que corresponde aos atributos relacionados aos Produtos */
export class ProductListComponent {
    pageTitle: string = 'Lista de Produtos';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart'; /* definimos aqui uma string de modelo */
    products: any[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },{
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }   
    ];

    /* Método para poder carregar a imagem ao clicar no botão */
    toggleImage() : void {
        this.showImage = !this.showImage;
    }
}