// stack and heap memory as in javascript there are majorly two type of data types primitive and reference or non primitive
// the primitive data types uses stack memory and reference dat types uses heap memory
let a="2";
let b=a;
b="3";
console.log([a,b]);
// above given will be stored in stack while stored in stack "b" is given with a copy of data in "a"  whatsoever "b" do with its copy will not affect data in "a"

// reference type datatypes are functions,object and array
// as data is given as reference towards oroginal data insetad of giving copy so whatever changes are made in reference data it being actually made in real data
let array1 =[1,2,3,4,5];
let array2 = array1;
array2[0]=5;
console.log(array1);


let obj1={
    name:'harry',
    age:"22",
    networth:"11cr",
}
let obj2 = obj1;
obj2.networth ="15crore";
console.log(obj1);

// to copy value of an obj1 without reference we can use ...
let obj3 = {...obj1};
obj3.networth="17crore";
console.log(obj1);
console.log(obj3);
// there four method to do so  first one is sohw above using {...name_of_obj} and for array [...name_of_array]
// other three methods are   let clone = Object.assign({}, userDetails)   JSON.parse(JSON.stringfy()) Method
// ... and object.assignh({},objname) these methods of copying reference vaLUE DOES SHAL;LOW COPYING ONLY TO DO DEEP CLONING USE JSON.parse(JSON.stringfy()) but issues comes 
// while deep cloning using JSON.parse For example, it does not work with functions, symbols, or undefined values. It also changes other values like Nan and Infinity to null
// so use _.cloneDeep(object name)