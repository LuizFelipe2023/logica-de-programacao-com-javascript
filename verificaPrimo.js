function verificaPrimo(n){
    if(n<2){
        return false;
    }
    for(let i = 2; i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

let arr = [1,2,5,9,15];

let quantidadePrimos = 0;

for(let i = 0; i<arr.length;i++){
    if(verificaPrimo(arr[i])){
        quantidadePrimos++;
    }
}
console.log('Imprimindo o vetor...');
console.log(arr);
console.log('Verificando a quantidade de numeros primos...');
console.log(quantidadePrimos);