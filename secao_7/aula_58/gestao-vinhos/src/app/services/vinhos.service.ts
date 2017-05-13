import { Injectable } from '@angular/core';

import { Vinho } from './../models/vinho';

import { Http } from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VinhosService {

  constructor(private http: Http) { }

  listar(): Observable<Array<Vinho>> {
    return this.http.get('api/vinhos')      
      .map(response => response.json().data as Array<Vinho>)
      .catch(this.tratarErro);
  }

  private tratarErro(erro:any): Observable<any> {
    console.log(erro);
    return Observable.throw(erro.message | erro);   
  }
}
