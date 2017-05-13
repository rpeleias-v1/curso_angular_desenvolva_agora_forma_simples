import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'cadastro-vinho',
  templateUrl: './cadastro-vinho.component.html',
  styleUrls: ['./cadastro-vinho.component.css']
})
export class CadastroVinhoComponent implements OnInit {

  constructor(private router: Router){ }

  ngOnInit() {
  }

  voltar(): void {
    this.router.navigate(['/vinhos']);
  }

}
