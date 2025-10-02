// function chai(){
//     console.log(this);
    
// } // --> 1st way to make a function
// chai()
// // this works only inside an object 
  
// const add = function(){


// } //-->Second way to make a function

// const addnum = () => {

// }// --> Third way to make a functions

function myName(){

    console.log("Rishabh");
    
}
//myName()

// function addTwoNumbers( number1 , number2 ){
//     console.log( number1 + number2 );
    
// }
function addTwoNumbers( number1 , number2 ){
   let result = number1 +number2
    return result
}
const result = addTwoNumbers(5, 9)  
// console.log("result: ",result);
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        
        
    }
    else{
    console.log(`${username} just logged in `);

    }
    
    
}
// console.log(loginUserMessage("Rishabh"))
// loginUserMessage("Rishabh");
function calculateCartPrice (price1,price2 ,...prices){
    return prices
}
console.log(calculateCartPrice(200,300,400,500));

const player = {
    name : "Rishabh",
    age : 24
}
function playerDetails(anyobject){
    console.log(`Player name is ${anyobject.name} and age is ${anyobject.age}`)
}
playerDetails(player)