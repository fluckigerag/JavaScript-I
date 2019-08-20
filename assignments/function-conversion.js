// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// Challenge 1
// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => {
    console.log("Function was invoked!");
};
myFunction();


// //function declaration syntax
// function funcName (params) {
//     return "something";
// }

// //arrow function syntax 
// const funcName = (params) => {
//     return "something";
// }


// Challenge 2
// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = (param) => {
    return param;
};
anotherFunction("Example");
console.log(anotherFunction("Example"))

// Challenge 3
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (param1, param2) => {
    return param1 + param2;
};
console.log(add(1, 2))

// Challenge 4
// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (param1, param2) => {
    return param1 - param2;
};
console.log(subtract(1, 2))

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);