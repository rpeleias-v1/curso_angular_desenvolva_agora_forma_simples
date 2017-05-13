import { Component } from '@angular/core';

@Component({
    selector: 'primeira-app',
    template: '<h1>Olá, {{nome}}</h1>'
})
export class AppComponent {

    nome: string = "@rpeleias";

}