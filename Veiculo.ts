export class Veiculo {
    marca: string;
    modelo: string;
    potencia: number;
    numeroMarchas: number;
    marchaAtual: number;
    velocidade: number;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = 0;
        this.numeroMarchas = 5;
        this.marchaAtual = 0;
        this.velocidade = 0;
    }
    /*
    velocida maxima = 120 * potencia/2
    maxima = 180
    marchas = 6
    velocidade por marcha = 30

    velocidadeCompativel = velocidadePorMarcha * marchaAtual;

    */
    acelerar(): number {
        if (this.marchaAtual != 0) {
            this.velocidade += this.potencia * 0.1;
        }
        return (this.velocidade);
    }
    subirMarcha(): void {
        if (this.marchaAtual != this.numeroMarchas)
            this.marchaAtual++;
    }
}