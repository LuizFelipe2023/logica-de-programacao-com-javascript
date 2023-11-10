function converteFahParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
let fahrenheit = 100;
let temperaturaCelsius = converteFahParaCelsius(fahrenheit);
console.log(`${fahrenheit} Fahrenheit é igual a ${temperaturaCelsius.toFixed(2)} Celsius`);