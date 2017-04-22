interface CaracteristicasPessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

function listarCaracteristicas(caracteristicas: CaracteristicasPessoa) {
    console.log(`${caracteristicas.nome} ${caracteristicas.sobrenome}, ${caracteristicas.idade} anos`);
}

listarCaracteristicas({nome: "Rodrigo", sobrenome: "Peleias", idade: 28});