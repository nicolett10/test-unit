// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))



const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * (oneEuroIs.USD);
    // retornamos el valor
    return Number(valueInDollar.toFixed(2));
}
const fromDollarToYen = function(Dollars){
    // convertimos el valor a dolares
    let valueInYen = ((Dollars * oneEuroIs.JPY)/oneEuroIs.USD);
    // retornamos el valor
    return Number(valueInYen.toFixed(2));
}
const fromYenToPound = function(Yen){
    // convertimos el valor a dolares
    let valueInPound = ((Yen * oneEuroIs.GBP)/ oneEuroIs.JPY)
    // retornamos el valor
    return Number(valueInPound.toFixed(2));
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

console.log(fromEuroToDollar(3.5));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(100));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };