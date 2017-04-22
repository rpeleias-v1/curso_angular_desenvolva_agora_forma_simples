import { Cachorro } from '../06-classes/modificadores';
 
class Crud {

    constructor(public objetos: any[]) {}

    listar(): any[] {
        return this.objetos;
    } 

    obter(id: number):any {
        return this.objetos[id];
    }

    adicionar(objeto: any): void{
        this.objetos.push(objeto);
    }

    remover(id: number): void {
        this.objetos.slice(id, 1);
    }
}

let cachorros: Array<Cachorro> = new Array();
let toto2: Cachorro = new Cachorro();
let rex2: Cachorro = new Cachorro();
cachorros.push(toto2);
cachorros.push(rex2);

let crudCachorro: Crud = new Crud(cachorros);

let cachorrosRetornados = crudCachorro.listar();
console.log("Quantidade de cachorros retornados = " + cachorrosRetornados.length);