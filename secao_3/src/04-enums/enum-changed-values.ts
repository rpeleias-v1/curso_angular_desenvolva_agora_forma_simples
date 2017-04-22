enum CorModificada{
    Azul = 1, 
    Vermelho = 1, 
    Verde = 1,
    Branco,
    Amarelo,
    Preto = Amarelo * Vermelho
}

console.log(CorModificada.Azul);
console.log(CorModificada[CorModificada.Azul]);

console.log(CorModificada.Verde);
console.log(CorModificada[CorModificada.Verde]);

console.log(CorModificada.Preto);
console.log(CorModificada[CorModificada.Preto]);