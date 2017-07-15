import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private autenticacaoService: AutenticacaoService) { }
  
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    if (this.autenticacaoService.usuarioLogado) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }    
  }
}
