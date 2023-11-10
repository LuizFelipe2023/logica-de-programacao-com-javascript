function retornaDivisores(n){
     let divisores = 0;
     for(let i = 1; i<=n; i++){
         if(n%i==0){
            divisores++;
         }
     }
     return divisores;
}

console.log(`O número 10 possui ${retornaDivisores(10)} divisores.`);