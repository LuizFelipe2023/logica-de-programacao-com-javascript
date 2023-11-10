import ler from 'readline-sync';

console.log('Calculadora de Media');

let media = 0;
let soma = 0;


for(let i = 0; i<3; i++){
    let notas = ler.question(`Digite a nota ${i+1}: `);
    soma += Number(notas);
    media = soma/3;
}

console.log('A media final:',media.toFixed(2));
