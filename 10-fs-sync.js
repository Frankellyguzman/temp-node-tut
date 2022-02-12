const {readFileSync, writeFile, writeFileSync} = require('fs') // this is the same as 
console.log('start');//this as well as the other console logs, are solely for the purpose of demonstrating the important of non blocking code in our projects
// const fs = require('fs'); this is the same that is written above, just different syntax of writing it
// fs.readFileSync



//we need to provide the path and the encoding for decoding purposes, generally it's utf-8

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')


console.log(first, second);
//this line here is reading what ever is stored in those above files previously created, and using the encoding info to be able to effectively decode them into human readable text

writeFileSync('./content/result-sync.txt', 
`Here is the result: ${first}, ${second}`, {flag: 'a'})
console.log('done with this task');
console.log('starting the next one');
// if what we needed is the text to repeat and apend as we run the function
//then we would require  to add {flag: 'a'} to our code. this will concatenate every text iteration
