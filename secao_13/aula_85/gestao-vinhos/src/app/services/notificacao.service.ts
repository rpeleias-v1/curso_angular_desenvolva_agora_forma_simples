import { Injectable } from '@angular/core';

import { Notificacao } from '../models/notificacao';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificacaoService {

  public _notificacoes: Subject<Notificacao> = new Subject<Notificacao>();

  constructor() { }

  public adicionar(notificacao: Notificacao) {
    this._notificacoes.next(notificacao);
  }

  public obterNotificacoes() {
    return this._notificacoes.asObservable();
  }

}
