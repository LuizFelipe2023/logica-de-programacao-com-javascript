import ler from 'readline-sync';

console.log('Bem vindo a operacoes 1.0');

let n1 = ler.question('Digite o primeiro numero:');
let n2 = ler.question('Digite o segundo numero:');

console.log('O valor da soma: ',Number(n1)+Number(n2));
console.log('O valor da subtracao: ',n1-n2);
console.log('O valor da multiplicacao: ',n1*n2);
console.log('O valor da divisão: ',n1/n2);