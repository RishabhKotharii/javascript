const myNumbers = [1,2,3,4]

// const myTotal = myNumbers.reduce( function(acc,currval){
//     console.log(`acc: ${acc} , curr : ${currval}`);
    
//     return acc + currval
// },0)


const myTotal = myNumbers.reduce( (acc,currval) => acc + currval,0 )
// console.log(myTotal);

const myShoppingCart = [
    {
        Name : "JS",
        Price : 2999
    },
    {
        Name : "JAVA",
        Price : 1999
    },
    {
        Name : "C++",
        Price : 999
    },
    {
        Name : "HTML",
        Price : 299
    }
]

const TotalAmount = myShoppingCart.reduce( (acc ,curr) => acc+curr.Price ,0)
console.log(TotalAmount);

 