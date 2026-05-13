// Find the factors of a number.
// 6 = 1,2, 3
// 28 = 1, 2, 4, 7, 14
// 100 = 1, 2, 4, 5, 10, 20, 25, 50

let number = 28;
let sumOfFactors = 0;
for (let i = 1; i <= number / 2; i++) {
    if (number % i == 0) {
        console.log(`factor of ${number} is ${i}`);
        sumOfFactors = sumOfFactors + i;
    }
}

console.log(number === sumOfFactors ? 'its a perfect number' : 'its not perfect');


// check if the number is prime or not
//17 is a prime number
// prime number is not divisible by any other number

let isPrime = true;
number = 12;
for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
        console.log(`${number} is divisible by ${i}`);
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`${number} is a prime`);
}
else {
    console.log(`${number} is not a prime`);
}


// find the perfect numbers in a range of 1 to 10000
for (let number = 1; number <= 10000; number++) {

    let sumOfFactors = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            //console.log(`factor of ${number} is ${i}`);
            sumOfFactors = sumOfFactors + i;
        }
    }
    if (number == sumOfFactors) {
        console.log(`perefect number = ${number}`);
    }

}

// find the prime numbers in a range of 1 to 100
for (let number = 1; number <= 100; number++) {
    let isPrime = true;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`prime number = ${number}`);
    }
}