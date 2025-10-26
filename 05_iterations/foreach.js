const coding = ['js','ruby','java','pythin','cpp']
 
coding.forEach( (item,index,arr) => {
   console.log(item,index,arr);
    
});

function printme(item) {
    //console.log(item);
    
}

const myCoding = [
    {
        languagename : 'Javascript',
        languagefilename : 'js'
    },
    {
        languagename : 'Java',
        languagefilename : 'ja'
    },
    {
        languagename : 'python',
        languagefilename : 'py'
    }
]

myCoding.forEach( (element) => {
    console.log(element.languagename);
    
})