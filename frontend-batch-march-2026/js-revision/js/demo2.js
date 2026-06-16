console.log("Hello World JS - external file");

//global scope : inside the file directly
var a = 100;
let b = 200;
const c = 300;

a = 1000;  // reassignment is possible
b = 2000; // reassignment is possible
// c = 3000; // reassignment is not possible . error

console.log(a);
console.log(b);
console.log(c);

var var1;
function f1() {
    var x = 1;
    let y = 2;
    const z = 3;
    var1 = 100;

    console.log(x);
    console.log(y);
    console.log(z);

}
f1();
// console.log(x);
// console.log(y);
// console.log(z);
console.log(var1);

{
    var a1 = 100;
    let a2 = 200;
    const a3 = 300;
}
console.log(a1); // var a1 is leaking outside the block
console.log(a2);
console.log(a3);