export class Animal {

    public nome: string;
    public raca: string;
    private sexo: string = 'Macho';
    protected quantidadePatas: number = 4; 

    listar(): string {
        return `${this.nome}, ${this.raca}, ${this.sexo}, ${this.quantidadePatas}`;
    }
}

let rex: Animal = new Animal();
//variáveis marcadas como public podem ser acessadas e modificadas livremente
rex.nome = "Rex";
rex.raca = "Vira-latas";
console.log(rex.listar());

//atributos marcados como private não podem ser acessados externamente, nem através de herança"
//rex.sexo = "Macho";

//atributo quantidade patas só pode ser acessado em uma subclasse
//rex.quantidadePatas = 4

export class Cachorro extends Animal {

    listar(): string {
        // variável sexo não pode ser vista em uma subclasse, porque está marcada com private
        //variável quantidaePatas, marcada com o modificador protected, pode ser herdada na subclasse Cachorro
        return `Cachorro: ${this.nome}, ${this.raca}, ${this.quantidadePatas}`;
    }
}

let toto: Cachorro = new Cachorro();
toto.nome = "Totó";
toto.raca = "Poodle";
console.log(toto.listar());