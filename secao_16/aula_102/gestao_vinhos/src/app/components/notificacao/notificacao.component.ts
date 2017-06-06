import { Component, OnInit } from '@angular/core';
import {state, trigger, style, transition, animate} from '@angular/animations';

import { Notificacao } from '../../models/notificacao';
import { NotificacaoService} from '../../services/notificacao.service';

@Component({
  selector: 'notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css'],
  animations: [
    trigger('visibilidade', [
      state('visivel', style({
        opacity: 1
      })),
      state('naoVisivel', style({
        opacity: 0
      })),
      transition('visivel => naoVisivel', animate('.5s'))
    ])]  
})
export class NotificacaoComponent implements OnInit {

  notificacao: Notificacao;
  visibilidade: string  = 'naoVisivel';

  constructor(private notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.notificacaoService.obterNotificacoes().subscribe((notificacao: Notificacao) => {
      this.notificacao = notificacao;
      this.visibilidade = 'visivel';
      setTimeout(() => {
        this.visibilidade = 'naoVisivel';
      }, 3000);
    })
  }

  tipoAlerta() {
    return this.notificacao.tipo;
  }

}
