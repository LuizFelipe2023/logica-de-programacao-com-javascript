import ler from 'readline-sync';

console.log('Calculador de reajuste salarial 1.0');

let salario = parseFloat(ler.question('Digite o valor do seu salario:'));
let taxa = parseFloat(ler.question('Digite a porcentagem de reajuste:'));

let reajuste = salario + (salario * taxa / 100);

console.log(`O novo salário com o reajuste é: ${reajuste}`);
