import ler from 'readline-sync';

console.log('Algoritmo para calcular area do retangulo 1.0');

let base = ler.question('Digite a base do retangulo:');
let altura = ler.question('Digite a altura do retangulo:');

let area = base*altura;

console.log('O valor da area:',area);