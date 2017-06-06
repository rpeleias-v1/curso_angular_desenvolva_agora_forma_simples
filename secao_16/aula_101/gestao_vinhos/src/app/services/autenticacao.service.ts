import { Injectable } from '@angular/core';

@Injectable()
export class AutenticacaoService {

  private _usuarioLogado:boolean = false;

  constructor() { }

  login(login: string, senha: string): Promise<boolean> {
    if(login === 'rodrigo' && senha === 'rodrigo') {
      this._usuarioLogado = true;
      return Promise.resolve(true);
    } else {
      this._usuarioLogado = false;
      return Promise.resolve(false);
    }
  }

  get usuarioLogado(): boolean {
    return this._usuarioLogado;
  }

}
