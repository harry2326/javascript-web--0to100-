// attaching two strings
const name = "hitesh"
console.log(name);
const repoCount = 50
console.log(name + repoCount + " Value");

// string iterpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// through this method we dont only make string but also get string functions along with it new keyword makes an object with type string 
// and gives all the methods available for doing or executing different string transformations or functions
const gameName = new String('hitesh-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  // tells which character is at 2nd (3RD AS indexing starts from 0) number 
console.log(gameName.indexOf('t')); //gives where is t 

const newString = gameName.substring(0, 4)  // takes two parameters starting an ending if both are same or starting is bigger than ending then returns 
console.log(newString);

const anotherString = gameName.slice(1,-4) // can take negative values that starts from behind
console.log(anotherString); 

const newStringOne = "   hitesh    "
console.log(newStringOne); 
console.log(newStringOne.trim()); // trim removes empty spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // change '%20' with '-'

console.log(url.includes('sundar')) //does it include word sundar

console.log(gameName.split('-')); //split and turn to array using spillint operator as "-""