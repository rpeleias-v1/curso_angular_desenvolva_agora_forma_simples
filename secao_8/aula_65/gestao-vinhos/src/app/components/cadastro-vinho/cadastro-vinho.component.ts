import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Vinho } from '../../models/vinho';

import { VinhosService } from '../../services/vinhos.service';

@Component({
  selector: 'cadastro-vinho',
  templateUrl: './cadastro-vinho.component.html',
  styleUrls: ['./cadastro-vinho.component.css']
})
export class CadastroVinhoComponent implements OnInit {

  vinho: Vinho;
  uvas: Array<string>;
  classificacoes: Array<string>;

  constructor(private router: Router, private vinhoService: VinhosService){ }

  ngOnInit() {
    this.vinho = new Vinho();    
    this.uvas = ['Merlot', 'Cabernet Sauvignon', 'Carmenere'];
    this.classificacoes = ['Tinto', 'Branco', 'Verde'];
  }

  voltar(): void {
    this.router.navigate(['/vinhos']);
  }

  salvar() {
    this.vinhoService.cadastrar(this.vinho)
      .then(response => {
        console.log(JSON.stringify(response));
        alert("Vinho cadastrado com sucesso");
        this.router.navigate(['/vinhos']);
      })
      .catch(erro => {
        console.log(erro);
      })
  }

}
