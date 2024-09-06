[
    {"dia": 1, "valor": 22174.1664},
    {"dia": 2, "valor": 24537.6698},
    {"dia": 3, "valor": 26139.6134},
    {"dia": 4, "valor": 0.0},
    {"dia": 5, "valor": 0.0},
    {"dia": 6, "valor": 26742.6612},
    {"dia": 7, "valor": 0.0},
    {"dia": 8, "valor": 42889.2258},
    {"dia": 9, "valor": 46251.174},
    {"dia": 10, "valor": 11191.4722},
    {"dia": 11, "valor": 0.0},
    {"dia": 12, "valor": 0.0},
    {"dia": 13, "valor": 3847.4823},
    {"dia": 14, "valor": 3734.1406},
    {"dia": 15, "valor": 2659.7563},
    {"dia": 16, "valor": 48924.2448},
    {"dia": 17, "valor": 18419.2614},
    {"dia": 18, "valor": 0.0},
    {"dia": 19, "valor": 0.0},
    {"dia": 20, "valor": 35240.1826},
    {"dia": 21, "valor": 0.0},
    {"dia": 22, "valor": 43829.1667},
    {"dia": 23, "valor": 18235.6852},
    {"dia": 24, "valor": 4355.0662},
    {"dia": 25, "valor": 13327.1025},
    {"dia": 26, "valor": 0.0},
    {"dia": 27, "valor": 0.0},
    {"dia": 28, "valor": 25681.8318},
    {"dia": 29, "valor": 1718.1221},
    {"dia": 30, "valor": 0.0}
]

const fs = require('fs');

const faturamentoMensal = JSON.parse(fs.readFileSync('faturamento.json', 'utf-8'));

function calcularFaturamento(faturamento) {
    let menorValor = Number.MAX_VALUE;
    let maiorValor = Number.MIN_VALUE;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;
    
    for (let i = 0; i < faturamento.length; i++) {
        let valor = faturamento[i].valor;
        
        if (valor > 0) {
            if (valor < menorValor) menorValor = valor;
            if (valor > maiorValor) maiorValor = valor;
            
            somaFaturamento += valor;
            diasComFaturamento++;
        }
    }

    let mediaMensal = somaFaturamento / diasComFaturamento;

    let diasAcimaDaMedia = 0;
    for (let i = 0; i < faturamento.length; i++) {
        let valor = faturamento[i].valor;
        if (valor > mediaMensal) {
            diasAcimaDaMedia++;
        }
    }

    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        diasAcimaDaMedia: diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(faturamentoMensal);

console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);