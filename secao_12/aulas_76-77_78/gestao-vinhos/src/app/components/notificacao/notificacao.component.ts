import { Component, OnInit } from '@angular/core';

import { NotificacaoService } from '../../services/notificacao.service';
import { Notificacao } from '../../models/notificacao';

@Component({
  selector: 'notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  notificacao: Notificacao;
  visivel: boolean = false;

  constructor(private notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.notificacaoService.notificacaoAdicionada.subscribe((notificacao: Notificacao) => {
        this.notificacao = notificacao;
        this.visivel = true;
        setTimeout(() => {
          this.visivel = false
        }, 2000);
    })
  }

  tipoAlerta() {
    if (this.notificacao) {
      return `alert-${this.notificacao.tipo}`
    } else {
      return 'alert-success';
    }
  }

}
