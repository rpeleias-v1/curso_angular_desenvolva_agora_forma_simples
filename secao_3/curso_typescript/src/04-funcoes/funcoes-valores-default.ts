function imprimeNomeComValoresDefault(primeiroNome: string, sobrenome: string, idade: number = 28): string {
    return `Nome complete: ${primeiroNome} ${sobrenome}. Idade: ${idade}`;
}

console.log(imprimeNomeComValoresDefault('Rodrigo', 'Peleias'));

console.log(imprimeNomeComValoresDefault('Rodrigo', 'Peleias', 30));