import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { VinhosComponent } from './components/vinhos/vinhos.component';
import { VinhosService } from './services/vinhos.service';
import { NotificacaoService } from './services/notificacao.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { VinhoApi } from './vinho-api';
import { CadastroVinhoComponent } from './components/cadastro-vinho/cadastro-vinho.component';
import { DetalhesVinhoComponent } from './components/detalhes-vinho/detalhes-vinho.component';
import { NotificacaoComponent } from './components/notificacao/notificacao.component';

@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent,
    CadastroVinhoComponent,
    DetalhesVinhoComponent,
    NotificacaoComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule  ,
    InMemoryWebApiModule.forRoot(VinhoApi),
    AppRoutingModule 
  ],
  providers: [VinhosService, NotificacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
