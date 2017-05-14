import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vinho } from './../../models/vinho';

import { VinhosService } from './../../services/vinhos.service';

@Component({
  selector: 'vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;
  vinhoSelecionado: Vinho;

  constructor(public vinhosService: VinhosService, public router: Router) { }

  ngOnInit() {
    this.vinhosService.listar()
      .then((vinhos: Array<Vinho>) => {
        this.vinhos = vinhos;
      }).catch((error: any) => {
        console.log(error);
      });
  }

  selecionar(vinho: Vinho) {
    this.vinhoSelecionado = vinho;
  }

  visualizar() {
    this.router.navigate(['/detalhes-vinho', this.vinhoSelecionado.id]);
  }

  editar() {
    this.router.navigate(['/cadastro-vinho', this.vinhoSelecionado.id]);
  }

}
