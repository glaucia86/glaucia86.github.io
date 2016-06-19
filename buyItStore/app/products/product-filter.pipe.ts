/* Criação de uma Pipe customizada para fins de realizar o filtro na busca do nome 
do produto */

import { PipeTransform, Pipe } from 'angular2/core';
import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})

/* Método que irá realizar a busca de produtos pelo nome através de um pipe customizado */
export class ProductFilterPipe implements PipeTransform {
    /* aqui devemos implementar a interface do Produto utilizando 'transform' */
    transform(value: IProduct[], args: string[]): IProduct[] { 
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }    
}
