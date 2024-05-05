// data comparison and arthematical operators , arthematical operators are those keywords that are used to perform mathematical operations and comparsion 
//  operators are those which are used to perform logical comparison between two things
// arthematical operators
let a=2;
let b="3";
let c = a*b;
console.log(c);
// even though b is string and a is number javascript perform the multiplication this is some issues in javascript which are resolved using typescript
c=a/b;
console.log(c);
c=a%b;
console.log(c);
c=a**b;
console.log(c);
c=a+b;
console.log(c);
c=a-b;
console.log(c);
// compaRISON OPERATOR
// <,>,==,<=,>=,!=,===
// so difference between == and === is that == is compare value operator while === strict compare
let d = "google";
let e= "gooGle";
let f = (d==e);
console.log(f);
// exact same comparison
 e= "google";
 f = (d==e);
console.log(f);
// does space counts
 e= " gooGle ";
 f = (d==e);
console.log(f);
// strict comparsion
e="2";
d=2;
f = (d==e);
let h = (e===d)
console.log(f); //this gives true
console.log(h); // this gives false as it als ocheck datatype in strcit comparison