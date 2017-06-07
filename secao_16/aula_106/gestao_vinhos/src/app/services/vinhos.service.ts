import { Injectable } from '@angular/core';

import { Vinho } from './../models/vinho';
import { AutenticacaoService } from './autenticacao.service';

import { Http, Request, RequestOptions, RequestOptionsArgs, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VinhosService {

  private apiUrl:string = '/vinhos';

  constructor(private http: Http, private autenticacaoService: AutenticacaoService) { }

  listar(): Promise<Array<Vinho>> {
    return this.http.get(this.apiUrl, this.header())
      .toPromise()
      .then(response => response.json() as Array<Vinho>)
      .catch(this.tratarErro);
  }
  
  cadastrar(vinho: Vinho): Promise<Response> {
    return this.http.post(this.apiUrl, JSON.stringify(vinho), this.header())
      .toPromise()
      .then(response => response)
      .catch(this.tratarErro);
  }

  buscar(id: number): Promise<Vinho> {
    return this.http.get(`${this.apiUrl}/${id}`, this.header())
      .toPromise()
      .then(response => response.json() as Vinho)
      .catch(this.tratarErro);
  }

  atualizar(id: number, vinho: Vinho): Promise<Response> {
    return this.http.put(`${this.apiUrl}/${id}`, vinho, this.header())
      .toPromise()
      .then(response => response)
      .catch(this.tratarErro);
  }

  remover(id: number): Promise<Response>  {
    return this.http.delete(`${this.apiUrl}/${id}`, this.header())
      .toPromise()
      .then(response => response)
      .catch(this.tratarErro);
  } 

  private tratarErro(erro:any): Promise<any> {
    console.log(erro);
    return Promise.reject(erro.message | erro);
  }

  private header(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.autenticacaoService.token });
    let requestOptions = new RequestOptions({ headers: headers });
    return requestOptions;
  }
}
