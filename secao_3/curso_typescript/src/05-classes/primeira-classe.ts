class PrimeiroVeiculo {
    marca: string;
    cor: string;
    anoFabricacao: number;

    acelerar(): void {
        console.log(`Acelerando o veículo...`);
    }

    trocarMarcha(): void {
        console.log( 'Troca de marcha!!');
    }

    parar(): void {
        console.log(`Parando o veículo no estacionamento..`);
    }
}

let monza: PrimeiroVeiculo = new PrimeiroVeiculo();
monza.marca = 'Chevrolet';
monza.cor = 'Vermelho';
monza.anoFabricacao = 1900;

console.log(`Veiculo Monza = ${monza.marca}, ${monza.cor}, ${monza.anoFabricacao}`);
monza.acelerar();
monza.trocarMarcha();
monza.acelerar();
monza.parar();