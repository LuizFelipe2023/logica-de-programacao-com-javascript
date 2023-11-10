const verificaSinal = (n) => {
    if (n < 0) {
        return 'Este numero é negativo';
    } else {
        return 'Este numero é positivo';
    }
};

let n = 2;
console.log(`Numero ${n}`);
console.log(verificaSinal(n));
