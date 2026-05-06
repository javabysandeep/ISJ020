// const - values never change
const PI = 3.14;
const institute= 'IT Shaala';


// let - values may change
let offline_student_count = 0;
let online_student_count = 0;


// var - legacy dont use - values may change
var legacyVar = 'dont use it';

//block scope
{
    let blockLevelLet = "block level variable using let"
    var blockLevelVar = "leaks outside"; 
    const location= 'Deccan';
}
//console.log(location); // const defiend in block cant

console.log(blockLevelVar); // work

//console.log(blockLevelLet); // ReferenceError


let quantity = 199;

console.log(typeof quantity)