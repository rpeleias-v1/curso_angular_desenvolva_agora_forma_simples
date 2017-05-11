function imprimirNomeCompletoComPeso(nome, sobrenome, peso) {
    if (peso) {
        return "Nome completo: " + nome + " " + sobrenome + ". Peso atual: " + peso + " kg";
    }
    else {
        return "Nome completo: " + nome + " " + sobrenome + ". Peso atual: n\u00E3o informado";
    }
}
console.log(imprimirNomeCompletoComPeso('Rodrigo', 'Peleias'));
console.log(imprimirNomeCompletoComPeso('Rodrigo', 'Peleias', 77));
//# sourceMappingURL=funcoes-parametros-opcionais.js.map