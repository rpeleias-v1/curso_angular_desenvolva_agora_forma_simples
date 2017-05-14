import { Injectable } from '@angular/core';

import { Notificacao } from '../models/notificacao';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificacaoService {

  public _notificacoes: Subject<Notificacao> = new Subject<Notificacao>();

  constructor() { }
  
  public obterNotificacoes() {
    return this._notificacoes.asObservable();
  }

  public sucesso(mensagem: string) {
    this.adicionar(mensagem, 'alert-success');    
  }

  public informacao(mensagem: string) {
    this.adicionar(mensagem, 'alert-info');    
  }

  public aviso(mensagem: string) {
    this.adicionar(mensagem, 'alert-warning');    
  }

  public perigo(mensagem: string) {
    this.adicionar(mensagem, 'alert-danger');    
  }

  private adicionar(mensagem: string, tipo: string) {
    let notificacao:Notificacao = new Notificacao();
    notificacao.mensagem = mensagem;
    notificacao.tipo = tipo;
    this._notificacoes.next(notificacao);
  }

}
