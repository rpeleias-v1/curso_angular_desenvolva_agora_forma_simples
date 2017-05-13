import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinhosComponent } from './../components/vinhos/vinhos.component';
import { CadastroVinhoComponent } from './../components/cadastro-vinho/cadastro-vinho.component';

export const router:Routes =[
  {
    path: '',
    redirectTo: '/vinhos',
    pathMatch: 'full'
  },
  {
    path: 'vinhos',
    component: VinhosComponent,    
  },
  {
    path: 'cadastro-vinho',
    component: CadastroVinhoComponent,    
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
