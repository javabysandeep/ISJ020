console.log("arithmetic operators");
console.log(10 + 20);  // 30
console.log(10 - 20); // -10
console.log(10 * 20); // 200
console.log(10 / 20); // 0.5 = Quotient
console.log(10 % 20); // 10 = Remainder
console.log(10 ** 3); // 1000

console.log(10 / 0); // Infinity
console.log(10 % 0); // nan
console.log(10 ** 0); // 1 --> 1!=1, 0! = 1

console.log("shorthand arithmetic operators");
let a = 10;
let b = 1;
/* a = a + b; //a = 11
a += b; //a = 11
*/

/*
a = a - b; //a = 10-1 =9
a -= b; //a = 9
*/

/*
    a = a * b; //a = 10*1 =10
    a *= b; //a = 10
*/

/*
    a = a / 2; //a = 10/2 =5
    a /= 2; //a = 5
*/

/*
    a = a % 2; //a = 10/2 =5
    a %= 2; //a = 5
*/
console.log(a);

const students = ["Mayuresh", "Pratik", "Pushkar", "Supriya", "Vedant"];
for (const name of students) {
    console.log(`Hello, ${name}`);
}

const words = "Good morning";
for (const character of words) {
    console.log(character);
}

const result = {
    "mayuresh": 65,
    "pratik": 67,
    "supriya": 85,
    "vedant": 71,
    "pushkar": 61
};

for (const key in result) {
    console.log(key);
}
for (const val of Object.values(result)) {
    console.log(val);
}
// mayuresh, pratik, supriya, vedant, pushkar
