// different ways to define a function
//01. function declaration way : it is hoisted


const result = sum(100, 200);  // function call : 100,200 are arguments

console.log(`Addition of two numbers = ${result}`);
console.log(`Addition of 10 and 20 is = ${sum(10, 20)}`);


//function definition
function sum(number1, number2) {
    // parameters are number1, number2 whhich holds values sent
    return number1 + number2;
}

//02. function expression

//sayHi(); // this wont work --> TypeError

let sayHi = function () {
    console.log("Hi there");
}

sayHi();

//03. arrow function - it is also not hoisted
let calculate = (number1, number2) => number1 + number2;
console.log("sum = " + calculate(500, 500));




//write an arrow function which returns random number of 4 digits
let otp = () => {
    //min = 1000, max = 9999
    let min = 1000;
    let max = 9999;
    return Math.floor(Math.random() * 10000);
    // random generates a random number between 0 to 1
};
console.log(`OTP = ${otp()}`);

//rest parameters

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
console.log(sumAll(10, 20, 30)); //60

// scope : visibility
//01. global - anywhere in the file
//02. block - within the block
//03. function -- within the function

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



const x = 10;
function outer() {
    const y = 20;

    function inner() {
        const z = 30;
        console.log(x + y + z); // 10 + 20 + 30 = 60
    }

    inner();
    console.log(z); //error - z is not visible
}
outer();