const user = {
    username: "rishabh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Harsh"
// user.welcomeMessage()

function chai(){
    //console.log(this);
    
} // --> 1st way to make a function
chai()
// this works only inside an object 
  
const add = function(){


} //-->Second way to make a function

const addnum = () => {

}// --> Third way to make a functions

// IIFE Immediately invoked function expressions

(function chai(){
    console.log("DB Connected")
})();
// put ';' semicolon after every IIFE
((name)=>{
    console.log(`${name} entered the DB `);
    
})('Rishabh')