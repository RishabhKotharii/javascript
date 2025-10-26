// const coding = ['js','ruby','java','pythin','cpp']
 
// const value = coding.forEach( (item) => {
//    console.log(item);
//    return item; 
// });
// console.log(value);

const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNum = myNum.filter( (num) => { //whenever opening {} use return 
//    return num > 4 
// })

// const newNums = []
// myNum.forEach( (num) => {
//    if (num > 4){
//          newNums.push(num)
//    }
// })
// console.log(newNums);
 
 // how to use filters in array containing objects 

 const books = [
   { name : 'bookone', genre : 'fiction' , publish : 1988, edition : 2008 },
   { name : 'booktwo', genre : 'multifiction' , publish : 1982, edition : 2004 },
   { name : 'bookthree', genre : 'nonfiction' , publish : 1983, edition : 2003 },
   { name : 'bookfour', genre : 'fiction' , publish : 1981, edition : 2006 },
   { name : 'bookfive', genre : 'multifiction' , publish : 1985, edition : 2002 },
   { name : 'booksix', genre : 'nonfiction' , publish : 1986, edition : 2000 }
 ]

 const userBooks = books.filter( (bk) => bk.genre === 'fiction' && bk.publish >= 1980)
 
 console.log(userBooks);
 