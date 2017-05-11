let arrayArrowFunction = ['Azul', 'Verde', 'Amarelo', 'Azul'];


arrayArrowFunction.forEach(function(nome) {
    console.log(`Valor iterado por uma função de callback comum: ${nome}`);
});

arrayArrowFunction.forEach((nome: string) => {
    console.log(`Valor iterado por uma arrow function: ${nome}`);
});