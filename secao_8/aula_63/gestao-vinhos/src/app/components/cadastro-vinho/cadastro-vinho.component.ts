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

  constructor(private router: Router, private vinhosService: VinhosService){ }

  ngOnInit() {
    this.inicializarValoresCadastro();
  }

  private inicializarValoresCadastro(): void {
    this.vinho = new Vinho();
    this.uvas = ['Cabernet Sauvignon', 'Merlot', 'Carmenére', 'Syrah'];
    this.classificacoes = ['Tinto', 'Branco', 'Verde'];
  }

  voltar(): void {
    this.router.navigate(['/vinhos']);
  }

  salvar() {
    this.vinhosService.cadastrar(this.vinho)
      .then(response => {
        console.log(JSON.stringify(response)); 
        alert("Vinho cadastrado com sucesso");
        this.router.navigate(['/vinhos']);        
      })
      .catch(error => {
        alert("Erro ao cadastrar o vinho");
        console.log(error);
      });
  }


}
