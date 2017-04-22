function concatenar(primeiro: string, ...outros: string[]) {
    return primeiro + " " + outros.join(" ");
}

console.log(concatenar("Azul", "Vermelho", "Verde"));
console.log(concatenar("Azul", "Vermelho"));
console.log(concatenar("Branco"));

function listarNomes(...nomes: string[]) {
    return nomes.join(" ");
}

console.log(listarNomes("Azul", "Vermelho", "Verde"));
console.log(listarNomes("Azul", "Vermelho"));
console.log(listarNomes("Branco"));