import ler from 'readline-sync';

const retornaImc = (peso, altura) => {
    return peso / (altura * altura);
}

const verificaCondicao = () => {
    
    let peso = ler.questionFloat('Digite o seu peso em kg: ');
    let altura = ler.questionFloat('Digite a sua altura em metros: ');

   
    let imc = retornaImc(peso, altura);

    if (imc <= 18.5) {
        console.log('Você está abaixo do peso.');
    } else if (imc > 18.6 && imc <= 24.9) {
        console.log('Você está no peso ideal.');
    } else if (imc >= 25 && imc <= 29.9) {
        console.log('Você está levemente acima do peso.');
    } else if (imc >= 30 && imc <= 34.9) {
        console.log('Você está na obesidade grau 1.');
    } else if (imc >= 35 && imc < 39.9) {
        console.log('Você está na obesidade grau 2.');
    } else {
        console.log('Você está na obesidade grau 3.');
    }
}


verificaCondicao();
