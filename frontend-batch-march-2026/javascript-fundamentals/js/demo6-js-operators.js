const a = 17, b=5;

// arithmetic operators
console.log(`Arithmetic addition is ${a+b}`);
console.log(`Arithmetic substraction is ${a-b}`);
console.log(`Arithmetic multiplication is ${a*b}`);
console.log(`Arithmetic diviion - Quotient is ${a/b}`);
console.log(`Arithmetic diviion - Remainder is ${a % b}`);
console.log(`Arithmetic Power  ${a ** b}`);


console.log(1 / 10 ); // 0.1
console.log(1 % 10 ); // 1
console.log(2 % 10 ); // 2
console.log(3 % 10 ); // 3
console.log(4 % 10 ); // 4
console.log(99 / 100 ); // 0.99
console.log(99 % 100 ); // 99
console.log(10 % 10 ); // 0

console.log("shorthand arithmetic operators"); 
let x = 10, y=20;

x +=10; //x = x + 10;
y -=10; // y = y - 10;
console.log(x); //20
console.log(y); //10
console.log( x *=10); // 20 * 10 --> x = 200
console.log( y /=2); // 10 / 2 --> y = 5

console.log("increment // decrement");

let d = 10;
console.log(d++);//10
console.log(d);//d = 11
console.log(++d);//d = 12

let e = 10;
console.log(e--);//10
console.log(e);//= 9
console.log(--e);// 8


let m=1, n=2, o=3,p=4;

console.log(m++ + ++m + --n + n++ + ++o + ++p + o--);//19
console.log(`m=${m} n=${n} o=${o} p=${p}`) //m=3 n=2 o=3 p=5


console.log("comparison or relational operators");
console.log(10 > 5); //true
console.log(10 >= 10); //true
console.log(3  < 1); //false
console.log(3  <= 3); //true
console.log(3 == 3); //true

console.log(3 == "3"); //true

console.log(3 === "3"); //false

console.log(3 != "3"); //false

console.log(3 !== "3"); //true

console.log( true != "true" ); //true ---> to do
console.log( true !== "true" ); //true


console.log("logical AND &&");
console.log( true && true); //true
console.log( true && false); //false
console.log( false && true); //false
console.log( false && false); //false


console.log("logical OR ||");
console.log( true || true); //true
console.log( true || false); //true
console.log( false || true); //true
console.log( false || false); //false

console.log("logical not");
console.log( !true); //false
console.log( !false); //true

console.log( !"hi"); //false
console.log( !!"hi"); //true


console.log("conditional operator");

console.log( true ? "this is true" :"this is false");
console.log( false ? "this is true" :"this is false");


console.log( "hi are you there" ? "yes i am there" : "i am not there");
console.log( "" ? "yes i am there" : "i am not there");


