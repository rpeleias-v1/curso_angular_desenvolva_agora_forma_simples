import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Vinho } from '../../models/vinho';

import { VinhosService } from '../../services/vinhos.service';

@Component({
  selector: 'cadastro-vinho',
  templateUrl: './cadastro-vinho.component.html',
  styleUrls: ['./cadastro-vinho.component.css']
})
export class CadastroVinhoComponent implements OnInit {

  vinho: Vinho;
  uvas: Array<string>;
  classificacoes: Array<string>;
  titulo: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private vinhoService: VinhosService){ }

  ngOnInit() {
    this.vinho = new Vinho();    
    this.uvas = ['Merlot', 'Cabernet Sauvignon', 'Carmenere'];
    this.classificacoes = ['Tinto', 'Branco', 'Verde'];
    this.titulo = 'Cadastro de Vinho';

    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params['id'];
      if(id) {
        this.titulo = 'Edição de vinhos';
        this.carregarVinho(id);
      }
    });
  }

  private carregarVinho(id: number) {
    this.vinhoService.buscar(id)
      .then(vinho => {
        this.vinho = vinho;
      }).catch(erro => console.log(erro));
  }

  voltar(): void {
    this.router.navigate(['/vinhos']);
  }

  salvar() {
    if(this.vinho.id) {
      this.atualizar();
    } else {
      this.cadastrarNovo();
    }
  }

  private cadastrarNovo() {
    this.vinhoService.cadastrar(this.vinho)
      .then(response => {
        console.log(JSON.stringify(response));
        alert("Vinho cadastrado com sucesso");
        this.router.navigate(['/vinhos']);
      })
      .catch(erro => {
        console.log(erro);
      })
  }

  private atualizar() {
    this.vinhoService.atualizar(this.vinho.id, this.vinho)
      .then(response => {
        console.log(JSON.stringify(response));
        alert("Vinho atualizado com sucesso");
        this.router.navigate(['/vinhos']);
      })
      .catch(erro => {
        console.log(erro);
      })
  }
}
