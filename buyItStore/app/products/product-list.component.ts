/* Arquivo Componente 'ts' - Lista de Produtos */

import { Component } from 'angular2/core';
import { IProduct } from './product';

@Component ({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})

/* Classe em .ts que corresponde aos atributos relacionados aos Produtos */
export class ProductListComponent {
    pageTitle: string = 'Lista de Produtos';
    imageWidth: number = 150;
    imageMargin: number = 15;
    showImage: boolean = false;
    listFilter: string = 'produto'; /* definimos aqui uma string de modelo */
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "iPhone 5S 16GB Prata Tela 4 IOS 8 4G Câmera de 8MP",
            "productCode": "GDN-0011",
            "releaseDate": "19 de Março de 2016",
            "description": "Com um design fino e elegante, o iPhone 5S traz recursos avançados por um preço excelente, apresentando tela Retina de 4 polegadas, chip A7 com arquitetura de 64 bits, sensor de impressão digital Touch ID, câmera iSight de 8MP, câmera FaceTime HD, 4G LTE e Wi-Fi*, iOS 8 e iCloud.",
            "price": 1.899,
            "starRating": 5,
            "imageUrl": "https://static.wmobjects.com.br/hotsite/sku-content/apple/418764/images/418764-apple-iphone-5s-16gb-prata-espacial-desbloqueado-ios7-product-image01.png"
        },{
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

    /* Método para poder carregar a imagem ao clicar no botão */
    toggleImage() : void {
        this.showImage = !this.showImage;
    }
}