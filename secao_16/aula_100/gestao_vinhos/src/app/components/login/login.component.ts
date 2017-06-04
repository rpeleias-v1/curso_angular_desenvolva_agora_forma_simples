import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: Usuario;
  carregando: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.usuarioLogin = new Usuario();
  }

  logar() {
    this.carregando = true;
    this.router.navigate(['/vinhos']);
  }

}
