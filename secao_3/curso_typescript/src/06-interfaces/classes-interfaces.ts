interface CRUD {

    criar(objeto: any): any;

    buscarTodos(): any[];

    buscar(index: number): any;

    atualizar(index: number, objeto: any): any;

    remover(index: number);
}

class Animal {
    nome: string;
    raca: string;
}

class AnimalCRUD implements CRUD {

    private animais: Array<Animal> = []

    criar(objeto: Animal): Animal {
        this.animais.push(objeto);
        return objeto;
    }

    buscarTodos(): Animal[] {
        return this.animais;
    }

    buscar(index: number): Animal {
        return this.animais[index];
    }

    atualizar(index: number, objeto: Animal): Animal {
        this.animais[index] = objeto;
        return objeto;
    }

    remover(index: number): void {
        this.animais.splice(index, 1);
    }
}

let crud: AnimalCRUD = new AnimalCRUD();

let cachorro: Animal = new Animal();
cachorro.nome = "Totó";
cachorro.raca = "Poodle";

let cachorroCriado  = crud.criar(cachorro);
console.log(cachorroCriado);

console.log(crud.buscarTodos());
console.log(crud.buscar(0));