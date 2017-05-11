function imprimeNomeComValoresDefault(primeiroNome, sobrenome, idade) {
    if (idade === void 0) { idade = 28; }
    return "Nome complete: " + primeiroNome + " " + sobrenome + ". Idade: " + idade;
}
console.log(imprimeNomeComValoresDefault('Rodrigo', 'Peleias'));
console.log(imprimeNomeComValoresDefault('Rodrigo', 'Peleias', 30));
//# sourceMappingURL=funcoes-valores-default.js.map