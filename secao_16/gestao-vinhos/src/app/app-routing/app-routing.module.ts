import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';

import { VinhosComponent } from '../components/vinhos/vinhos.component';
import { CadastroVinhoComponent } from '../components/cadastro-vinho/cadastro-vinho.component';
import { DetalhesVinhoComponent} from '../components/detalhes-vinho/detalhes-vinho.component';
import { LoginComponent} from '../components/login/login.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/vinhos',
    pathMatch: 'full'
  },
  {
    path: 'vinhos',
    component: VinhosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-vinho',
    component: CadastroVinhoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-vinho/:id',
    component: CadastroVinhoComponent
  },
  {
    path: 'detalhes-vinho/:id',
    component: DetalhesVinhoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
