var valorStringany = "Primeira variavel any";
console.log('Valor String = ' + valorStringany);
valorStringany = false;
console.log('Valor boolean = ' + valorStringany);
valorStringany = 10.0;
console.log('valor number = ' + 10.0);
valorStringany = ["primeiro", 2, false, new Date()];
console.log('Iteração sobre array de múltiplos tipos');
valorStringany.forEach(function (valor) {
    console.log(valor);
});
//# sourceMappingURL=any.js.map