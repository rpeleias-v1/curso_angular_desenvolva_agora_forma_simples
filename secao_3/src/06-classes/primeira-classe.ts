class PrimeiroVeiculo {
    modelo: string;
    cor: string;
    fabricante: string;
    anoFabricacao: number;

    acelerar(): string {
        return "Acelerando o veículo...";
    }

    frear(): string {
        return "Freando o veículo...";
    }

    ligar(): string {
        return "Ligando o carro";
    }

    desligar() {
        return "Desligando o carro";
    }

    listar(): string {
        return `Modelo: ${this.modelo}, Ano de Fabricação: ${this.anoFabricacao}
        , Fabricante: ${this.fabricante}, Cor: ${this.cor}`
    }
}

let monza = new PrimeiroVeiculo();
monza.modelo = "Monza";
monza.cor = "Vermelho";
monza.fabricante = "Chevrolet";
monza.anoFabricacao = 1990;

console.log(monza.listar());
console.log(monza.acelerar());
console.log(monza.frear());
console.log(monza.ligar());
console.log(monza.desligar());

