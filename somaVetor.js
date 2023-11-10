function somarVetores(vetor1, vetor2) {
    if (vetor1.length !== vetor2.length) {
        throw new Error('Os vetores têm tamanhos diferentes. Não é possível realizar a soma.');
    }

    let resultado = [];
    
    for (let i = 0; i < vetor1.length; i++) {
        resultado.push(vetor1[i] + vetor2[i]);
    }

    return resultado;
}
let vetorA = [1, 2, 3];
let vetorB = [4, 5, 6];

try {
    let resultado = somarVetores(vetorA, vetorB);
    console.log('Vetor resultante da soma:', resultado);
} catch (error) {
    console.error(error.message);
}