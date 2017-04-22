class VeiculoConstrutor {
    
    constructor(public modelo: string, public cor: string, public fabricante: string, public anoFabricacao: number) {}

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

let vectra = new VeiculoConstrutor("Vectra", "Prata", "Chevrolet", 1998);

console.log(vectra.listar());