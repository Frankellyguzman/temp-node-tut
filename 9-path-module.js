const path = require('path')

const file_location = path.dirname('users/frankellyguzman/documents/homework');

//add the path separator to a file, like removing the backslashes that are extra and adding those non existent, in summ we can simply add the folder or file names divided by coma and with simple quotes and this would add the necessary dividers for the individual system in use

console.log(path.sep);


const filePath = path.join('/content/','//subfolder','test.txt')
console.log(filePath);


// this only returns the filename meaning what's in the end of the specified path
const base =path.basename(filePath)

console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute);