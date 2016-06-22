/* Aqui estamos criando um arquivo Interface - Produto */
/* Tudo que seja relacionado ao Produto colocaremos aqui */

export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;    
}