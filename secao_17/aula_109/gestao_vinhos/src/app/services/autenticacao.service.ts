import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class AutenticacaoService {

  private _usuarioLogado:boolean = false;
  private _token: string;

  constructor(private http: Http) { }

  login(login: string, senha: string): Promise<boolean> {
    return this.http.post('/login', JSON.stringify({login: login, senha: senha}))
      .toPromise()
      .then((response: Response) => {
          if(response.json() && response.json().token) {
            this._token = response.json().token;
            localStorage.setItem('usuarioSistema', JSON.stringify(response.json().usuario));  
            return true;                  
          } else {
            localStorage.removeItem('usuarioSistema');
            return false;
          }
      });    
  }

  logout(): void {
    this._token = null;
    localStorage.removeItem('usuarioSistema');
  }

  get usuarioLogado(): boolean {
    return localStorage.getItem('usuarioSistema') !== null;
  }

  get nomeUsuarioLogado(): string {
    if (localStorage.getItem('usuarioSistema') !== null) {
      return JSON.parse(localStorage.getItem('usuarioSistema')).nome;
    } else {
      return 'Usuário não autenticado no sistema';
    }
  }

  get token(): string {
    return this._token;
  }
}
