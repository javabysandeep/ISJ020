//Function declaration are full hoisted, meaning
//Both function name and its body are available before the line where it is defined.

//this works because javaScript internally treats it like function defined first  and call later

sayHello(); // this is function call before the function is declared/defined

function sayHello() {
    console.log("Hello there");
}


//02. function expressions  are not fully hoisted.

//sayHi(); // this wont work --> TypeError
var sayHi = function () {
    console.log("Hi there");
}


//03. arrow functions are not hoisted fully.
//greet(); // this wont work --> TypeError
var greet = () => {
    console.log("Greetings");
}

// --> basic parameters
//function definition , price and rate are parameters
function calculateGst(price, rate) {

    return price + (price * rate / 100);

}

//function call , 100, 18 are arguments
console.log(calculateGst(100, 18));


// default parameters [ES6]
function greetStudent(name, course = "Full Stack Java") {
    return `welcome ${name} to the ${course} course`;
}

console.log(greetStudent('Shubham'));

//rest parameter or variable length
function sumAll(...numbers) {
    //numbers will be an array
    let total = 0;
    for (const n of numbers) {
        total += n;
    }
    return total;
}
console.log(sumAll(10, 20, 30, 40, 50)); //150


// early return : guard cases
function divide(a, b) {
    return b === 0 ? "Error: Cannot divide by zero" : a / b;
    //return a / b;
}

console.log(divide(10, 0)); //infinity


// global scope
const appName = "IT Shaala";

function showApp() {
    console.log(appName);

    // function scope : only visible inside this function
    const secret = "payment gateway secrets";
    console.log(secret); // it works
}

showApp();
//console.log(secret); // ReferenceError --> function scope


//block scope let/const
if (true) {
    let blockLet = "block";
    const blockConst = "blockConst";
    var blockVar = "blockVar";
}

//console.log(blockLet); // error
//console.log(blockConst);  // error
console.log(blockVar);  // leaking : that's the reason we don't use var


// scope chain --> inner looks outward

const x = 10;
function outer() {
    const y = 20;

    function inner() {
        const z = 30;
        console.log(x + y + z); // 10 + 20 + 30 = 60
    }

    inner();
    //console.log(z); //error - z is not visible
}

outer();




//assign a function to a variable
const hi = (name) => `Hi, ${name}`; // arrow function
const userGeeting = hi; // copy reference 
console.log(userGeeting("Shubham"));


// pass a function as an argument
function runTwice(fn, value) {

    console.log(fn(value));

    console.log(fn(value));
}

runTwice(userGeeting, "Vedant");

//return a function ()
function makeMultiplier(factor) {
    return (n) => n * factor; // returns a new function
}
const tripple = makeMultiplier(3);
console.log(tripple(3));
console.log(makeMultiplier(3));

