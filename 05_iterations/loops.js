//for

for (let i = 1; i <= 10; i++) {
    const element = i;
    // console.log(element);  
    
} 

 for (let i = 1; i <=12; i++) {
    // console.log(`Table number  : ${i}`);
    
    for (let j = 1; j <=10; j++) {
    //  console.log(`Inner loop value : ${j}`);
        // console.log(`${i}*${j} = ${i*j}`);
        
        
    }    
 }
    let myArray = ["Rishabh","Rajat","Priya"]
 for (let index = 0; index <myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
 }
 
 for (let index = 1; index <= 10; index++) {
    console.log(`Value of index is ${index}`);
    if(index == 5){
        console.log("5 is detected");
        break
    } 
    
    
 }
 for (let index = 20; index >= 10; index--) {
    if(index == 15){
        console.log("15 is detected");
        continue
    } 
    console.log(`Value of index is ${index}`);
    
    
 }