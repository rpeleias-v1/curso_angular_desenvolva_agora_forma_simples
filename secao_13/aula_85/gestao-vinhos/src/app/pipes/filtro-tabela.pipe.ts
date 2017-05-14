import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTabela',
  pure: false
})
export class FiltroTabelaPipe implements PipeTransform {

  transform(objetos: any[], valor: string): any {
    if(valor !== undefined && valor !== '') {
      return objetos.filter((objeto: any) => {
        for(let propriedade in objeto) {
          if((objeto[propriedade].toString()).indexOf(valor) !== -1) {
            return (objeto[propriedade].toString()).indexOf(valor) !== -1; 
          }
        }
      });
    } else {
      return objetos;
    }
  }

}
