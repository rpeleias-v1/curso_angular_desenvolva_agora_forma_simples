function impressaoParametros(...parametros: string[]): string {
    return parametros.join(' ');
}

console.log(impressaoParametros('Azul', 'Amarelo', 'Verde'));
console.log(impressaoParametros('Rodrigo Peleias'));