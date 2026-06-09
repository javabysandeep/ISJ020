console.log("1- start"); // sync --> run first

setTimeout(
    //callback function
    () => {
        console.log("3 - timeout callback");  //async ---> runs last
    }, 5000);

Promise
    .resolve("resolved")
    .then(val => {
        console.log("2- Microtask ", val); // microtask ---> before timeout
    })
    .catch();

console.log("1.5 - end of sync code");

/*
    output order
       1- start
       1.5 - end of sync code
       2- Microtask
       3 - timeout callback

*/

//asycn database call
function getStudentDetails(id, callback) {
    setTimeout(() => {
        const student = { id, name: "Priya", courseId: 10 };
        callback(null, student);
    }, 500);
}


//mult function returns another function as return value
//returned function does ---> 
function f1(p1) {
    const functionToBeReturned = (input) => input * p1;
    return functionToBeReturned;
}
const functionReturned1 = f1(10); //(input) => input * 10;
const functionReturned2 = f1(5); //(input) => input * 5;
const functionReturned3 = f1(3); //(input) => input * 3;

console.log(functionReturned1(1));//(input) => input * 10; --> 10
console.log(functionReturned2(2));//(input) => input * 5; --> 10
console.log(functionReturned3(3));//(input) => input * 3; --> 9



function sayHello(name) {
    return function () {
        console.log(`Hello ${name}`);
    }
}
const greetVedant = sayHello("Vedant");
const greetShubham = sayHello("Shubham");

console.log(greetVedant()); //
console.log(greetShubham()); //