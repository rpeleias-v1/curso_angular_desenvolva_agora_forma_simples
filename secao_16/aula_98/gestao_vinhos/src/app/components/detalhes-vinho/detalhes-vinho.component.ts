import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { VinhosService } from '../../services/vinhos.service';

import { Vinho } from '../../models/vinho';

@Component({
  selector: 'app-detalhes-vinho',
  templateUrl: './detalhes-vinho.component.html',
  styleUrls: ['./detalhes-vinho.component.css']
})
export class DetalhesVinhoComponent implements OnInit {

  vinho: Vinho;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private vinhosService: VinhosService) { }

  ngOnInit() {
    this.vinho = new Vinho();
    this.activatedRoute.params.forEach((params:Params) => {
      let id = +params['id'];
      if(id) {
        this.buscarVinho(id);
      }
    })
  }

  private buscarVinho(id: number) {
    this.vinhosService.buscar(id)
      .then(vinho => {
        this.vinho = vinho;
      })
      .catch(erro => console.log(erro));
  }

  voltar() {
    this.router.navigate(['/vinhos']);
  }

}
