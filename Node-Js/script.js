console.log(process.argv);

//process.argv

// Run =>  node script.js niraj sachin

// Output:
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Web Development\\Node-Js\\script.js',
//   'niraj',
//   'sachin'
// ]

//module.exports

const value = require("./math");

console.log(value);
// console.log(value.sum(10, 20)); //Use of required function
