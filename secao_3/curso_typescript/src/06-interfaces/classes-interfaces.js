var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var AnimalCRUD = (function () {
    function AnimalCRUD() {
        this.animais = [];
    }
    AnimalCRUD.prototype.criar = function (objeto) {
        this.animais.push(objeto);
        return objeto;
    };
    AnimalCRUD.prototype.buscarTodos = function () {
        return this.animais;
    };
    AnimalCRUD.prototype.buscar = function (index) {
        return this.animais[index];
    };
    AnimalCRUD.prototype.atualizar = function (index, objeto) {
        this.animais[index] = objeto;
        return objeto;
    };
    AnimalCRUD.prototype.remover = function (index) {
        this.animais.splice(index, 1);
    };
    return AnimalCRUD;
}());
var crud = new AnimalCRUD();
var cachorro = new Animal();
cachorro.nome = "Totó";
cachorro.raca = "Poodle";
var cachorroCriado = crud.criar(cachorro);
console.log(cachorroCriado);
console.log(crud.buscarTodos());
console.log(crud.buscar(0));
//# sourceMappingURL=classes-interfaces.js.map