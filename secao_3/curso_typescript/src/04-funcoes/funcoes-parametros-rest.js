function impressaoParametros() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    return parametros.join(' ');
}
console.log(impressaoParametros('Azul', 'Amarelo', 'Verde'));
console.log(impressaoParametros('Rodrigo Peleias'));
//# sourceMappingURL=funcoes-parametros-rest.js.map