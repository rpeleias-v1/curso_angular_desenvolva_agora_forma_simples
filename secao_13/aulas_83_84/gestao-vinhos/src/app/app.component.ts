import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  dataHoje:Date = new Date();
  nomeUsuario: string = 'Rodrigo Peleias';
}
