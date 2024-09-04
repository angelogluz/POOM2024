import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            carro.acelerar();
            break;
        case 2:
            console.table(carro);
            break;
    
        default:
            break;
    }
}

console.table(carro);



function criaVeiculo(): Veiculo{
    
    const marca = teclado('Marca: ');
    const modelo = teclado('Modelo: ');
    const veiculo: Veiculo = new Veiculo(marca, modelo);
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}


