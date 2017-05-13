import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VinhosComponent } from './components/vinhos/vinhos.component';
import { VinhosService } from './services/vinhos.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { VinhoApi } from './vinho-api';

@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule  ,
    InMemoryWebApiModule.forRoot(VinhoApi)  
  ],
  providers: [VinhosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
