var Cor;
(function (Cor) {
    Cor[Cor["Azul"] = 0] = "Azul";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Amarelo"] = 2] = "Amarelo";
    Cor[Cor["Vermelho"] = 3] = "Vermelho";
    Cor[Cor["Laranja"] = 4] = "Laranja";
})(Cor || (Cor = {}));
console.log(Cor.Azul);
console.log(Cor.Verde);
console.log(Cor.Amarelo);
console.log(Cor.Vermelho);
console.log(Cor.Laranja);
console.log(Cor[Cor.Azul]);
console.log(Cor[0]);
//# sourceMappingURL=enum.js.map