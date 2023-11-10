import ler from 'readline-sync';

const verificaTriangulo = (a, b, c) => {
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
        return true;
    } else {
        return false;
    }

}
let ladoA = ler.questionFloat('Digite o valor do lado A: ');
let ladoB = ler.questionFloat('Digite o valor do lado B: ');
let ladoC = ler.questionFloat('Digite o valor do lado C: ');

if(verificaTriangulo(ladoA,ladoB,ladoC)){
    console.log('Os lados formam um triangulo');
}else{
    console.log('Os lados nao formam um triangulo');
}

