import { Veiculo } from "./Veiculo";

test("Deve avançar marcha", () => {
    //Cenário
    const veiculo = new Veiculo("Fiat","Uno");
    veiculo.numeroMarchas = 5;
    veiculo.marchaAtual = 2;

    //Ação
    veiculo.subirMarcha();

    //Verificação
    expect(veiculo.marchaAtual).toBe(3)

});

test("Não deve avançar marcha quando já estiver na última marcha", () => {
    //Cenário
    const veiculo = new Veiculo("Fiat","Uno");
    veiculo.numeroMarchas = 5;
    veiculo.marchaAtual = 5;

    //Ação
    veiculo.subirMarcha();

    //Verificação
    expect(veiculo.marchaAtual).toBe(5)

});

test("Deve acelerar se a marcha for diferente de 0", () => {
//Cenário
    const veiculo = new Veiculo("Fiat", "Uno");
    veiculo.potencia = 120;
    veiculo.marchaAtual = 1;
    veiculo.velocidade = 10
    
    //Ação
    veiculo.acelerar();

    //Verificação
    expect(veiculo.velocidade).toBeGreaterThan(10);
});

test("Não deve acelerar se a marcha for igual a 0", () => {
    //Cenário
    const veiculo = new Veiculo("Fiat", "Uno");
    veiculo.potencia = 120;
    veiculo.marchaAtual = 0;
    veiculo.velocidade = 0;

    //Ação
    veiculo.acelerar();

    //Verificação
    expect(veiculo.velocidade).toBe(0);
})

test("Não deve ser possível acelerar se a marcha for 1 e a velocidade 160", () => {
    //Cenário
    const veiculo = new Veiculo("Fiat", "Uno");
    veiculo.potencia = 120;
    veiculo.marchaAtual = 1;
    veiculo.velocidade = 160;

    //Ação
    veiculo.acelerar();

    //Verificação
    //expect(veiculo.velocidade).not.toBeGreaterThan(160);
    expect(veiculo.velocidade).toBeLessThanOrEqual(160);

})

test("Deve gerar um erro se a marcha for 5 e a velocidade for 10", () => {
    //Cenário
    const veiculo = new Veiculo("Fiat", "Uno");
    veiculo.potencia = 120;
    veiculo.marchaAtual = 5;
    veiculo.velocidade = 10;

    //Ação
    

    //Verificação
    expect(veiculo.acelerar()).toThrow("O veículo apagou!");
})

test("Um veículo com maior potência tem que ter maior aceleração", () => {

    //Cenário
    const veiculo1 = new Veiculo("Fiat", "Uno");
    veiculo1.potencia = 60;
    veiculo1.marchaAtual = 1;
    veiculo1.velocidade = 10;

    const veiculo2 = new Veiculo("Fiat", "Uno");
    veiculo2.potencia = 120;
    veiculo2.marchaAtual = 1;
    veiculo2.velocidade = 10;

    //Ação
    veiculo1.acelerar();
    veiculo2.acelerar();

    //Verificação
    expect(veiculo2.velocidade).toBeGreaterThan(veiculo1.velocidade);
});