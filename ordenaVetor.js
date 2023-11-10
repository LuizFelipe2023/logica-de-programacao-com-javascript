import ler from 'readline-sync';
let arr = [];
let tamanho = ler.question('Digite o tamanho do vetor: ');
for(let i = 0; i<tamanho;i++){
    let valor = ler.question('Insira dados no vetor: ');
    arr.push(valor);
}
console.log('Agora ordenando o vetor...');
console.log(arr.sort());