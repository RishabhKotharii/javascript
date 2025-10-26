const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// ********MAPS*******
let newNums =  myNumbers.map( (num) => num+10 )
 // *****FOREACH*******
let  Nums = myNumbers.forEach( (num) => console.log(num + 10)
 )

// *******Chaining****** using maps and filters together 
 newNums = myNumbers.map( (num)=> num*10).map( (value) => value + 1).filter( (int) => int > 50 )

console.log(newNums); 
