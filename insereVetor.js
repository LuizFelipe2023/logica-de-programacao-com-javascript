import ler from 'readline-sync';
let arr = [];
let tamanho = ler.question('Digite o Tamanho do Vetor');
console.log('Agora insira dados no vetor');
for(let i = 0; i<tamanho; i++){
    let valor = ler.question();
    arr.push(valor);
}
console.log('Imprimindo o vetor...');
console.log(arr);

