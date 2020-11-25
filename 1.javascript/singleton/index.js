const singleton = require('./singleton');

const obj1 = new singleton();
const obj2 = new singleton();

console.log(obj1 === obj2);
