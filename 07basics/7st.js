const score = 400


const balance = new Number(100.71) //define balance as constant data holder of type number andgets alot of function that is useful for number data type
console.log(balance);
console.log(balance.toString().length); //number to string
console.log(balance.toFixed(1));// tofixed function format your number to x specified digits after point it also round off your numbers 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));// toprecision method round of your whole number to given x digits, on other hand tofixed work after decimal point

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
const hundereds2 =hundreds.toExponential(4);
console.log(hundereds2)

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); convert to absolute value
// console.log(Math.round(4.6)); round off digit
// console.log(Math.ceil(4.2));  rounds number up to nearest integer
// console.log(Math.floor(4.9)); rounds number down to closet integer
// console.log(Math.min(4, 3, 6, 8)); find minimum
// console.log(Math.max(4, 3, 6, 8)); find maximum

console.log(Math.random());
console.log(Math.round(Math.random()*10));
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)