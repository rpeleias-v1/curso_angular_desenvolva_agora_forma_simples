import { Animal } from '../06-classes/modificadores';
import { Cachorro } from '../06-classes/modificadores';
 
class Crud<T>{

    constructor(public objetos: T[]) {}

    listar(): T[] {
        return this.objetos;
    } 

    obter(id: number):T {
        return this.objetos[id];
    }

    adicionar(objeto: T): void{
        this.objetos.push(objeto);
    }

    remover(id: number): void {
        this.objetos.slice(id, 1);
    }
}

let cachorros: Array<Animal> = new Array();
let toto2: Cachorro = new Cachorro();
let rex2: Cachorro = new Cachorro();
cachorros.push(toto2);
cachorros.push(rex2);

let crudCachorro: Crud<Cachorro> = new Crud(cachorros);

let cachorrosRetornados = crudCachorro.listar();
console.log("Quantidade de cachorros retornados = " + cachorrosRetornados.length);