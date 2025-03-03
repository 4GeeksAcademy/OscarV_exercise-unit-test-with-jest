// This is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // Just a console log for ourselves
// console.log(sum(7,3))

// module.exports = { sum };
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// parto codigo dela app de tipo de cambio

// 1 euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
  };
  
  let fromEuroToDollar = (amountInEuros) => {
    return amountInEuros * oneEuroIs["USD"];
  };
  let fromDollarToYen = (amountInDollars) => {
    const euroToYen = oneEuroIs["JPY"];
    const euroToDollar = oneEuroIs["USD"];
    return (amountInDollars / euroToDollar) * euroToYen;
  };
  
  let fromYenToPound = (amountInYen) => {
    const euroToYen = oneEuroIs["JPY"];
    const euroToPound = oneEuroIs["GBP"];
    return (amountInYen / euroToYen) * euroToPound;
  };
  
  module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };