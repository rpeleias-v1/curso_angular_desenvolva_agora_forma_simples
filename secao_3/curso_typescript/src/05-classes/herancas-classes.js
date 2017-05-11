var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Veiculo = (function () {
    function Veiculo() {
    }
    Veiculo.prototype.acelerar = function () {
        console.log("Acelerando o ve\u00EDculo...");
    };
    Veiculo.prototype.trocarMarcha = function () {
        console.log('Troca de marcha!!');
    };
    Veiculo.prototype.parar = function () {
        console.log("Parando o ve\u00EDculo no estacionamento..");
    };
    return Veiculo;
}());
var Moto = (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.utilizacaoCapacete = true;
        return _this;
    }
    Moto.prototype.acelerar = function () {
        _super.prototype.acelerar.call(this);
        console.log("Acelerando a moto...");
    };
    Moto.prototype.trocarMarcha = function () {
        _super.prototype.trocarMarcha.call(this);
    };
    Moto.prototype.parar = function () {
        console.log("Parando o moto no estacionamento..");
    };
    Moto.prototype.fazerManobrasRadicais = function () {
        console.log('Realizando manobras radicais com a moto!');
    };
    return Moto;
}(Veiculo));
var Caminhonete = (function (_super) {
    __extends(Caminhonete, _super);
    function Caminhonete() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.capacidadeCacamba = 700;
        return _this;
    }
    return Caminhonete;
}(Veiculo));
var cbr600 = new Moto();
cbr600.nome = 'CBR 600';
cbr600.anoFabricacao = 2016;
cbr600.cor = 'Vermelho';
console.log(cbr600.nome);
//cbr600.marca = 'Honda'
//cbr600.cilindrada = 600;
cbr600.acelerar();
cbr600.trocarMarcha();
//cbr600.fazerManobrasRadicais()
cbr600.parar();
//# sourceMappingURL=herancas-classes.js.map