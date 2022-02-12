const {readFile, writeFile,} = require('fs') 
console.log('start');
readFile('./content/first.txt','utf8', (err, result)=>{

    if(err){

        console.log('error');
        return null;
    }

    const first = result;
    
    console.log(result);
    readFile('./content/second.txt','utf8', (err, result)=>{

        if(err){
    
            console.log('error');
            return null;
        }
    
        const second = result;
        console.log(result);

        writeFile('./content/result-async2.txt', 
`Here is the result: ${first}, ${second}`, (err, result)=>{

    if(err){

        console.log('error');
        return null;
    }

    console.log('done with this task');
    console.log(result);


})
    })
})
console.log('starting next task');