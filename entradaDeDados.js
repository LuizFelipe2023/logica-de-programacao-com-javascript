import ler from 'readline-sync';

let nome = ler.question('Qual é seu nome:');
let idade = ler.question('Qual sua idade:');
let profissao = ler.question('Qual sua profissão:');

console.log(`Meu nome é ${nome} tenho a idade de ${idade} e trabalho como ${profissao}`);