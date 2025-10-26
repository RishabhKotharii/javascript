//forof 
// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for (const element of arr) {
    console.log(element);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
    
}
// **********MAP*************
const map = new Map()
map.set('IN','India')
map.set('FR','France')
map.set('USA','United States Of America')
//console.log(map);

// for (const [element,name] of map) {
//     //console.log(element, ':-', name);
    
// }
for (const key in map) {  //for in loop does not work in map
   console.log(key);
   
}