var VeiculoConstrutor = (function () {
    function VeiculoConstrutor(nome, marca, cor, anoFabricacao) {
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.anoFabricacao = anoFabricacao;
    }
    return VeiculoConstrutor;
}());
var monzaConstrutor = new VeiculoConstrutor('Monza', 'Chevrolet', 'Vermelho', 1990);
console.log("Veiculo " + monzaConstrutor.nome + ", " + monzaConstrutor.marca + ", " + monzaConstrutor.cor + ", " + monzaConstrutor.anoFabricacao);
//# sourceMappingURL=construtores.js.map