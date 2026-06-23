//01. we can assign a function to a variable
const hi = (name) => `Hi, ${name}`; // arrow function
const userGeeting = hi; // copy reference 
console.log(hi("Shubham"));
console.log(userGeeting("Shubham"));


//02. we can pass function as an argument
function f1(parameter) {
    parameter();
}
f1(() => { console.log("hello"); });


//03. function can return another function
function multiplication(factor) {
    return n => n * factor;
}
const c1 = multiplication(5); //n => n * 5
const c2 = multiplication(3); //n => n * 3

console.log(c1(3)); //n => n * 5 ---> 3 * 5 = 15
console.log(c2(3)); //n => n * 3 ---> 3 * 3 = 9


