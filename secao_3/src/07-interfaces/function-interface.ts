interface Impressao {
    imprimir(arquivo: string, quantidadePaginas: number): void;
    
    formatar(arquivo: string): void;

    getTamanhoArquivo(arquivo: string): number;
}

// implementação da interface impressoralazer com o contrato de ua impressora
class ImpressoraLazer implements Impressao {
   
    imprimir(arquivo: string, quantidadePaginas: number): void {       
        console.log(`Acionando impressão do arquivo ${arquivo}, com a quantidade de páginas ${quantidadePaginas}`);
    }
    
    formatar(arquivo: string): void {
        console.log(`Formatação do arquivo ${arquivo} em página a4`);
    }

    getTamanhoArquivo(arquivo: string): number {
        return arquivo.length;
    }
}

// pdfCreator acionamos na impressão de um arquivo :)
class PdfCreator implements Impressao {
   
    imprimir(arquivo: string, quantidadePaginas: number): void {       
        console.log(`Arquivo pdf gerado: ${arquivo}, com a quantidade de páginas ${quantidadePaginas}`);
    }
    
    formatar(arquivo: string): void {
        console.log(`Formatação do arquivo em pdf ${arquivo} em página a4`);
    }

    getTamanhoArquivo(arquivo: string): number {
        return arquivo.length;
    }
}

let pdfCreator: Impressao = new PdfCreator();
pdfCreator.imprimir("receita_bolo", 4);
pdfCreator.formatar("receita_bolo");
console.log(pdfCreator.getTamanhoArquivo("receita_bolo"));