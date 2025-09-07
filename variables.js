const accountId = 12334
let accountEmail = "rishabh@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"

// accountId = 2

accountEmail = "abc@gmail.com"
accountPassword = "3613"
accountCity = "pune"
console.log(accountId);

/*
prefer not to use var because of issue in block n functional scope  
Use let and const
*/

console.table([accountEmail,accountId,accountPassword,accountCity])