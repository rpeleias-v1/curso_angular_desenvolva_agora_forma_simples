class VeiculoConstrutor {
    
    nome: string;
    marca: string;
    cor: string;
    anoFabricacao: number;

    constructor(nome: string, marca: string, cor: string, anoFabricacao: number) {
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.anoFabricacao = anoFabricacao;
    }
}

let monzaConstrutor: VeiculoConstrutor = new VeiculoConstrutor('Monza', 'Chevrolet', 'Vermelho', 1990);

console.log(`Veiculo ${monzaConstrutor.nome}, ${monzaConstrutor.marca}, ${monzaConstrutor.cor}, ${monzaConstrutor.anoFabricacao}`);