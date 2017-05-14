import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vinho } from '../../models/vinho';
import { Notificacao } from '../../models/notificacao';

import { VinhosService } from '../../services/vinhos.service';
import { NotificacaoService } from '../../services/notificacao.service';
@Component({
  selector: 'vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;
  vinhoSelecionado: Vinho;

  constructor(public vinhosService: VinhosService, public router: Router, private notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.listar();
  }

  private listar() {
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

  remover() {
    this.vinhosService.remover(this.vinhoSelecionado.id)
      .then(response => {
        let notificacao: Notificacao = new Notificacao();
        notificacao.mensagem = 'Vinho removido com sucesso';
        notificacao.tipo = 'warning';
        this.notificacaoService.adicionar(notificacao);
        this.listar();
      }).catch(erro => console.log(erro));
  }

}
