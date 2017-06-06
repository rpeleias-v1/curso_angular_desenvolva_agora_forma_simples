import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class AutenticacaoService {

  private _usuarioLogado = false;

  constructor(private http: Http) { }

  login(login: string, senha: string): Promise<boolean> {
    if(login === 'rodrigo' && senha === 'rodrigo') {
      this._usuarioLogado = true;
      return Promise.resolve(true);
    }
    else {
      return Promise.resolve(false);
    }
  }

  get usuarioLogado(): boolean {
    return this._usuarioLogado;
  }

}
