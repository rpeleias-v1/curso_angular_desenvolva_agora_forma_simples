import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../../models/usuario';
import { AutenticacaoService } from '../../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: Usuario;
  carregando: boolean = false;
  erro: string = '';

  constructor(private router: Router, private autenticaoService: AutenticacaoService) { }

  ngOnInit() {
    this.usuarioLogin = new Usuario();
  }

  logar() {
    this.carregando = true;
    this.autenticaoService.login(this.usuarioLogin.login, this.usuarioLogin.senha)
      .then((usuarioLogado: boolean) => {
        if (usuarioLogado) {
          this.router.navigate(['/vinhos']);
        } else {
          this.carregando = false;
          this.erro = 'Usuário ou senha inválidos';
        }
      })
    
  }

}
