import { Component } from '@angular/core';

import { AutenticacaoService } from './services/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private autenticacaoService: AutenticacaoService) {}

  dataHoje = new Date();
  nome: string = 'Rodrigo Peleias';
  
}
