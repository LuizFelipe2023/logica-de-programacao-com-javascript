import ler from 'readline-sync'

let n = ler.question('Digite o numero que vc quer que retorne a tabuada: ');

let i = 1;

while(i<=10){
     console.log(`${n} x ${i} =`,n*i);
     i++;
}