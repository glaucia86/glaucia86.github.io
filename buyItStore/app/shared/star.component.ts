/* Arquivo Componente para as Estrelas da avaliação dos produtos pelos clientes */
import { Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'bi-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;  
    @Output ratingClicked: EventEmitter<string> = new EventEmitter<string>(); 

    /* Método que realiza o cálculo das estrelas */
    /* Usamos o 'OnChanges' porque queremos que a altura e a
    largura da estrela apareça todas as vezes que definimos a classificação de um
    produto.  Por isso, usamos o 'OnChanges' */
    ngOnChanges() : void {
        this.starWidth = this.rating * 86 / 5;
    }

    /* Método responsável para poder realizar o evento do click para
    a avaliação dos produtos - estrelas */
    onClick() {
        this.ratingClicked.emit(`A avaliação ${this.rating} foi clicada!`)
    }
}

