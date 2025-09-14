const age = 23 
console.log(age);
const contact = new Number(9746287368)
console.log(contact);

console.log(contact.toString().length);
console.log(contact.toFixed(2));

console.log(contact.toLocaleString(`en-IN`));

//*********maths********* */
console.log(Math.random());
const max = 20
const min = 15 

console.log(Math.floor(Math.random()*(max - min + 1) ) + min );
// This will give value between the range of max and min and that too randomnly