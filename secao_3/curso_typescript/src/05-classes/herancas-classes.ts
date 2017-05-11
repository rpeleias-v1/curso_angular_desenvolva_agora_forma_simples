class Veiculo {
    public nome: string;
    private marca: string;
    cor: string;
    anoFabricacao: number;

    acelerar(): void {
        console.log(`Acelerando o veículo...`);
    }

    protected trocarMarcha(): void {
        console.log( 'Troca de marcha!!');
    }

    parar(): void {
        console.log(`Parando o veículo no estacionamento..`);
    }
}

class Moto extends Veiculo {
    cilindrada: number;
    utilizacaoCapacete: boolean = true;

    acelerar(): void {
        super.acelerar();
        console.log(`Acelerando a moto...`);
    }

    trocarMarcha(): void {
        super.trocarMarcha();
    }

    parar(): void {
        console.log(`Parando o moto no estacionamento..`);
    }

    fazerManobrasRadicais(): void {
        console.log('Realizando manobras radicais com a moto!');
    }
}

class Caminhonete extends Veiculo {
    capacidadeCacamba: number = 700;
}

let cbr600: Veiculo = new Moto();
cbr600.nome = 'CBR 600';
cbr600.anoFabricacao = 2016;
cbr600.cor = 'Vermelho';

console.log(cbr600.nome);

//cbr600.marca = 'Honda'
//cbr600.cilindrada = 600;

cbr600.acelerar();
cbr600.trocarMarcha();
//cbr600.fazerManobrasRadicais()
cbr600.parar();
