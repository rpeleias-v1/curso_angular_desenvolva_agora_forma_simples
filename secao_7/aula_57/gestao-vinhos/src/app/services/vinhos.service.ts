import { Injectable } from '@angular/core';

import { Vinho } from './../models/vinho';

import { Http } from '@angular/http';

@Injectable()
export class VinhosService {

  constructor() { }

  listar(): Promise<Array<Vinho>> {
    let vinhos = new Array<Vinho>();
    vinhos.push(this.criarVinho(1, 'Casillero Del Diablo', 'Cabernet Sauvignon', 'Tinto', 'Concha y Toro', 2010, 'Chile'));
    vinhos.push(this.criarVinho(2, 'Casillero Del Diablo', 'Merlot', 'Tinto', 'Concha y Toro', 2015, 'Chile'));
    return Promise.resolve(vinhos);
  }

  private criarVinho(id: number, nome: string, uva: string, classificacao: string, fabricante: string, anoSafra:number, paisOrigem: string): Vinho {
    let vinho:Vinho = new Vinho();
    vinho.id = id;
    vinho.nome = nome;
    vinho.uva = uva;
    vinho.classificacao = classificacao;
    vinho.fabricante = fabricante;
    vinho.anoSafra = anoSafra;
    vinho.paisOrigem = paisOrigem;
    return vinho;
}

}
