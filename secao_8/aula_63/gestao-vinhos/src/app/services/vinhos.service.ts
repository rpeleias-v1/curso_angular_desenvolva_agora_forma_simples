import { Injectable } from '@angular/core';

import { Vinho } from './../models/vinho';

import { Http, RequestOptions, RequestOptionsArgs, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VinhosService {

  constructor(private http: Http) { }

  listar(): Promise<Array<Vinho>> {
    return this.http.get('api/vinhos')
      .toPromise()
      .then(response => response.json().data as Array<Vinho>)
      .catch(this.tratarErro);
  }

  cadastrar(vinho: Vinho): Promise<Response> {
    return this.http.post('api/vinhos', JSON.stringify(vinho), this.prepararHeader())
      .toPromise()
      .then(data => data)
      .catch(this.tratarErro);
  }

  private tratarErro(erro:any): Promise<any> {
    console.log(erro);
    return Promise.reject(erro.message | erro);
  }

  private prepararHeader(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ headers: headers });
    return requestOptions;
  }
}
