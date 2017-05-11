import { GenericCRUD} from './generic-crud';
import { GenericAnimal} from './generic-animal';

class GenericAnimalCRUD implements GenericCRUD<GenericAnimal> {

    private animais: Array<GenericAnimal> = []

    criar(objeto: GenericAnimal): GenericAnimal {
        this.animais.push(objeto);
        return objeto;
    }

    buscarTodos(): GenericAnimal[] {
        return this.animais;
    }

    buscar(index: number): GenericAnimal {
        return this.animais[index];
    }

    atualizar(index: number, objeto: GenericAnimal): GenericAnimal {
        this.animais[index] = objeto;
        return objeto;
    }

    remover(index: number): void {
        this.animais.splice(index, 1);
    }
}

let genericCrud: GenericAnimalCRUD = new GenericAnimalCRUD();

let gato: GenericAnimal = new GenericAnimal();
gato.nome = "Totó";
gato.raca = "Vira Lata";

let gatoCRiado  = genericCrud.criar(gato);
console.log(gatoCRiado);

console.log(genericCrud.buscarTodos());
console.log(genericCrud.buscar(0));