for (; false;) {
    console.log('hi');
    break;
}

let sum = 0;
for (let i = 1; i <= 5; i++) {
    console.log(i);
    sum += i;

}
console.log(`sum is ${sum}`);

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

console.log('even numbers');
for (let i = 5; false; i--) {
    console.log(i);

}

console.log('factorial of a number');
//5! = 1 * 2 * 3 * 4 * 5 = 120
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}
console.log(`factorial of ${num} is ${factorial}`);


console.log('multiplication table');
let number = 19;

for (let i = 1; i <= 10; i++) {
    console.log(number * i);
}

/*
console.log(5 * 1);
console.log(5 * 2);
console.log(5 * 3);
console.log(5 * 4);
console.log(5 * 5);
console.log(5 * 6);
console.log(5 * 7);
console.log(5 * 8);
console.log(5 * 9);
console.log(5 * 10);
*/

console.log('count the number of digits');
let number1 = 123456;
let count = 0;
let sumOfDigits = 0;

for (; number1 > 0;) {
    let lastDigit = Math.floor(number1 % 10);
    sumOfDigits += lastDigit;
    number1 = Math.floor(number1 / 10);
    count++;
}
console.log(`count of digits in a number  is ${count}`);
console.log(`sum of digits in a number  is ${sumOfDigits}`);



console.log('find the reverse of a number');
let number2 = 121;
let originalNumber2 = number2;
let reverse = 0;

for (; number2 > 0;) {
    let lastDigit = Math.floor(number2 % 10);
    reverse = reverse * 10 + lastDigit;
    number2 = Math.floor(number2 / 10);
}
console.log(`reverse is ${reverse}`);

console.log(originalNumber2 === reverse ? 'its palindrome' : 'not a palindrome');


console.log('Check whether a number is Armstrong.');
//armstrong = sum of digit raised to the count of digits
//e.g. 153 = 1^3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153
let number3 = 153;
let originalNumber3 = number3;
let sumOfDigitPower = 0;
for (; number3 > 0;) {
    let lastDigit = Math.floor(number3 % 10);

    sumOfDigitPower = sumOfDigitPower + (lastDigit ** 3);

    number3 = Math.floor(number3 / 10);
}

console.log(originalNumber3 === sumOfDigitPower ? 'its armstrong' : 'not a armstrong');


console.log('while loop');

count = 1;
while (count <= 5) {
    console.log(`count= ${count}`);
    count++; //must update it otherwise infinite loop
}


console.log('count the number of digits using while');
number = 123456;
count = 0;
sumOfDigits = 0;

while (number > 0) {
    let lastDigit = Math.floor(number % 10);
    sumOfDigits += lastDigit;
    number = Math.floor(number / 10);
    count++;
}
console.log(`count of digits in a number  is ${count}`);
console.log(`sum of digits in a number  is ${sumOfDigits}`);


// real world 
let input = "";
while (input != "quit") {
    input = prompt("Type a command( or quit to to exit)");
    console.log(`you have entered ${input}`);
}
console.log('you have exited!');


let i = 1;

do {
    console.log(`i = ${i}`);
    i++;

} while (i <= 3);