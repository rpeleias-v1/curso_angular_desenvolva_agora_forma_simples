import { Component, OnInit } from '@angular/core';

import { Vinho } from './../../models/vinho';

import { VinhosService } from './../../services/vinhos.service';

@Component({
  selector: 'vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css'],  
  providers: [VinhosService]
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;

  constructor(public vinhosService: VinhosService) { }

  ngOnInit() {
    this.vinhos = this.vinhosService.listar();
  }

}
