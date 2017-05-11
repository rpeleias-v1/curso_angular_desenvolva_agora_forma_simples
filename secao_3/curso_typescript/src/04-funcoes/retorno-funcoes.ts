function concatenarNone(primeiroNome: string, sobrenome: string): string {
    return `${primeiroNome} ${sobrenome}`;
}

console.log(concatenarNone('Rodrigo', 'Peleias'));

function listarNome(primeiroNome: string, sobrenome: string): void {
    console.log(`Listagem de nome = ${primeiroNome} ${sobrenome}`);    
}

listarNome('Rodrigo', 'Peleias');