import { Component } from '@angular/core';
import { environment} from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Olá, Rodrigo Peleias. Bem vindo ao curso Angular 2!'; 
  envName = environment.name;
}
