//  01. function declaration way - A function square(n) that returns n².
function square1(n){
    return n * n;
}
console.log(`declaration way = ${square1(5)}`);

//  02. function expression way - A function square(n) that returns n².
const square2 = function(n){
    return n * n;
}
console.log(`function expression way = ${square2(5)}`);

//  03. arrow function way - A function square(n) that returns n².
const square3 = (n) => n * n;
console.log(`arrow function way = ${square3(5)}`);




//closures in JS
function myCounter(){
    let count = 0;

    return {
        increment:()=> ++count,
        decrement:()=>--count,
        value: ()=>count
    };
}

const counter = myCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.value()); //2