interface CaracteristicasPessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

function imprimeCaracteristicas(caracteristicaPessoa: CaracteristicasPessoa) {
    console.log(`Características de uma pessoa = ${caracteristicaPessoa.nome}, ${caracteristicaPessoa.sobrenome}. Idade = ${caracteristicaPessoa.idade}`);
}

imprimeCaracteristicas({nome: "Rodrigo", sobrenome: "Peleias", idade: 28});