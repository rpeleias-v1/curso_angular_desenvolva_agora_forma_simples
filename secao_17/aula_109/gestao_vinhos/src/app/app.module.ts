import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { VinhosComponent } from './components/vinhos/vinhos.component';
import { VinhosService } from './services/vinhos.service';
import { NotificacaoService } from './services/notificacao.service';
import { AutenticacaoService } from './services/autenticacao.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { VinhoApi } from './vinho-api';
import { CadastroVinhoComponent } from './components/cadastro-vinho/cadastro-vinho.component';
import { DetalhesVinhoComponent } from './components/detalhes-vinho/detalhes-vinho.component';
import { NotificacaoComponent } from './components/notificacao/notificacao.component';
import { FiltroTabelaPipe } from './pipes/filtro-tabela.pipe';
import { DestacarEstiloDirective } from './diretivas/destacar-estilo.directive';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { VinhoContainerComponent } from './components/vinho-container/vinho-container.component';

import { fakeBackend } from './fake-backend/fake-backend';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent,
    CadastroVinhoComponent,
    DetalhesVinhoComponent,
    NotificacaoComponent,
    FiltroTabelaPipe,
    DestacarEstiloDirective,
    PageContainerComponent,
    VinhoContainerComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule  ,
    InMemoryWebApiModule.forRoot(VinhoApi),
    AppRoutingModule 
  ],
  providers: [
    VinhosService, 
    NotificacaoService,
    MockBackend,
    BaseRequestOptions,
    {provide: Http, useFactory: fakeBackend, deps: [MockBackend, BaseRequestOptions]},
    AutenticacaoService,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
