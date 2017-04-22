function imprimeParametro(nome: string, sobrenome: string = 'Peleias', idade: number = 28): string {
    return `Olá eu sou ${nome} ${sobrenome}, e tenho ${idade} anos!`;
}

console.log(imprimeParametro('Rodrigo'));
console.log(imprimeParametro('Rodrigo', 'rpeleias'));
console.log(imprimeParametro('Rodrigo', 'rpeleias', 40));