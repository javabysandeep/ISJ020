// implicit coercion (JS decides)
console.log("5" + 3); //53 ---> number coerced to string
console.log("5" - 3); //2 --->  string coerced to number
console.log(true + 1); //2 ---> true=1, boolean coerced to number
console.log(false + 1); //1 ---> false=0, boolean coerced to number

//explicit conversion
console.log(Number("42"));  //=42 explicit conversion of string into number
console.log(Number("hello"));  //NaN explicit conversion of string into number
console.log(String(100));  // explicit conversion of number into string
console.log(Boolean(42));  // explicit conversion of number into boolean
console.log(Boolean("hello"));  // explicit conversion of string into boolean
console.log(parseInt("42px"));  // explicit conversion parsing string into number


// === always use this for strict equality check

console.log(5 == "5"); //true --> coerces before comparing

console.log(5 === "5"); //false --> no coerson, type check


// string templates
const student = "Sakshi";
const course = "Full stack Java";
const session = 14;

// old way - concatenation
console.log("Welecome "+student+", you are on session "+session);


// new way string template way ${} --> expression, value, variable
console.log(`Welecome ${student}, you are on session ${session}`);

//expression
console.log(` 2 + 2 = ${2+2}`);


//mulitple line string
var lines = "hi"+
"hello";
console.log(lines);

console.log(`hi hi
    hello`);