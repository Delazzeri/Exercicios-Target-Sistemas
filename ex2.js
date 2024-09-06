const prompt = require('prompt-sync')();

let fibonacci = [0, 1]; 
let number = parseInt(prompt('Insira um número: ')); 

function fibonacciList(num) {
    for (let i = 2; ; i++) {
        let next = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(next);
        
        if (next >= num) break;
    }
    
    return fibonacci.includes(num);
}

if (fibonacciList(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}