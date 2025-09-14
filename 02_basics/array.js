//array

const myArr = [0 ,1 ,2 ,3 ,4 ,5 ]

console.log(myArr[0]);

//array methodds

myArr.push(8)
myArr.pop()
console.log(myArr);

const mainname = ["Rishabh","Swara","Tanmay"]
const surname = ["Kothari","Shah"]

const all_name = [...mainname,...surname]
console.log(all_name);

const another = [1,2,3,[4,5,6,[7,8],[9]]]
console.log(another);
const flatarr = another.flat(Infinity)
console.log(flatarr);

