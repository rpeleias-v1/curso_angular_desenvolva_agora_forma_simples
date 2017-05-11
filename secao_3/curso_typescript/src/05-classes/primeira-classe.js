var PrimeiroVeiculo = (function () {
    function PrimeiroVeiculo() {
    }
    PrimeiroVeiculo.prototype.acelerar = function () {
        console.log("Acelerando o ve\u00EDculo...");
    };
    PrimeiroVeiculo.prototype.trocarMarcha = function () {
        console.log('Troca de marcha!!');
    };
    PrimeiroVeiculo.prototype.parar = function () {
        console.log("Parando o ve\u00EDculo no estacionamento..");
    };
    return PrimeiroVeiculo;
}());
var monza = new PrimeiroVeiculo();
monza.marca = 'Chevrolet';
monza.cor = 'Vermelho';
monza.anoFabricacao = 1900;
console.log("Veiculo Monza = " + monza.marca + ", " + monza.cor + ", " + monza.anoFabricacao);
monza.acelerar();
monza.trocarMarcha();
monza.acelerar();
monza.parar();
//# sourceMappingURL=primeira-classe.js.map