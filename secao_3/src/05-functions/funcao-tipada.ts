// função nomeada
function somaTipada(x: number, y: number): number {
    return x + y;
}

let somaAnonimaTipada = function(x: number, y: number): number {
    return x + y;
}

let arrowSoma: (x: number, y: number) => number = 
function(x: number, y: number): number { return x + y};

console.log(somaTipada(1,2));
console.log(somaAnonimaTipada(3, 5));
console.log(arrowSoma(10, 5));