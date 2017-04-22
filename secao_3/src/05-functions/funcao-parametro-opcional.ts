function imprime(nome: string, sobrenome?: string) {
    if(!sobrenome) {
        return `Olá, ${nome}!`; 
    } else {
        return `Olá, ${nome} ${sobrenome}!`;
    }
}

console.log(imprime('Rodrigo', 'Peleias'));
console.log(imprime('Rodrigo'));