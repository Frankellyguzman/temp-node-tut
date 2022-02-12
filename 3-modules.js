// CommonJS, everyfile is a module (by default)
// Modules - Encapsulated Code (Only share the minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
// console.log(names);
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')


sayHi('Kelly');
// sayHi(names.john);
// sayHi(names.peter);
