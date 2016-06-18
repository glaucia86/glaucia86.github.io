import { Component } from 'angular2/core';

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <div>Meu primeiro Componente</div>
    </div>
    `
})

export class AppComponent {
    pageTitle: string = 'Buy it! A sua compra certa!';
}