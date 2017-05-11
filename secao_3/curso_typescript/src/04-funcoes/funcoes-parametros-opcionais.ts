function imprimirNomeCompletoComPeso(nome: string, sobrenome: string, peso?: number): string {
    if(peso) {
        return `Nome completo: ${nome} ${sobrenome}. Peso atual: ${peso} kg`;
    } else {
        return `Nome completo: ${nome} ${sobrenome}. Peso atual: não informado`;
    }
}

console.log(imprimirNomeCompletoComPeso('Rodrigo', 'Peleias'));
console.log(imprimirNomeCompletoComPeso('Rodrigo', 'Peleias', 77));