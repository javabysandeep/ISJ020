let value1 = 10;
console.log(typeof (value1));

let value2 = "10";
console.log(typeof (value2));

let value3 = true;
console.log(typeof (value3));

let value4;
console.log(typeof (value4)); // undefined

let value5 = null;
console.log(typeof (value5)); //object : famous bug 

let value6 = Symbol("Vaibhav Chavan");
let value7 = Symbol("Vaibhav Chavan");
console.log(typeof (value6));
console.log(value6.toString);
console.log(value7.toString);

console.log("type coerision and conversion");
console.log(1 + "1");//11
console.log(1 + "1" + 1);//111
console.log(1 + "1" - 1);//10
console.log(1 + "1" - 1 + true);//11

console.log(Number("42"));  //=42 explicit conversion of string into number
console.log(Number("hello"));  //NaN explicit conversion of string into number
console.log(String(100));  // explicit conversion of number into string
console.log(Boolean(42));  //true explicit conversion of number into boolean
console.log(Boolean("hello"));  //true  explicit conversion of string into boolean
console.log(parseInt("42px"));  //42 explicit conversion parsing string into 

console.log(5 == "5");//true : only content check
console.log(5 === "5");//false : content and type check

console.log("falsy values");
console.log(Boolean(false));//false
console.log(Boolean(0));//false
console.log(Boolean(""));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false

// string templates
const student = "Sakshi";
const course = "Full stack Java";
const session = 14;

// old way - concatenation
console.log("Welecome " + student + ", you are on session " + session);

// new way string template way ${} --> expression, value, variable
console.log(`Welecome ${student}, you are on session ${session}`);
