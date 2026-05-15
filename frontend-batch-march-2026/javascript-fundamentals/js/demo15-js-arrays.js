const students = ["saloni", "supriya", "pratik", "vedant", "shubham"];

// slice(start, end) - returns a new array 
console.log(students.slice(0, 2)); //saloni, supriya

console.log(students.slice(0)); //'saloni', 'supriya', 'pratik', 'vedant', 'shubham'

console.log(students.slice(-2)); //'vedant', 'shubham'


console.log(students.slice(5, 0)); //[]


const newStudents = ["Ritesh", "Yash"];

console.log(students.concat(newStudents).concat(["Sudarshan"])); // ['saloni', 'supriya', 'pratik', 'vedant', 'shubham', 'Ritesh', 'Yash']


//spread operator ...
const array1 = [1, 2, 3, 4, 5];
const array2 = [11, 12, 13, 14, 15];

const combined = [...array1, ...array2];
console.log(`spread operator ${combined}`);

//refernce copy
const copy1 = array1; // reference copy and not new array creation


//shallow copy or cloning
const copy2 = [...array1];


//join : array --> string
console.log(array1.join("->")); //1:2:3:4:5

//flat : flatten nested arrays
const nested = [[1, 2, 3], [4, 5], [11, 12], [7, 8]]; //1,2,3,4,5,11,12,7,8
console.log(nested.flat()); //[1, 2, 3, 4, 5, 11, 12, 7, 8]


//map() ---> returns same length array with different values
const scores = [10, 20, 30, 40, 50];

//output ==> [20,40,60,80,100]

const doubledResult = [];
for (const element of scores) {
    doubledResult.push(element * 2);
}

console.log(`orginal array ${scores}`);
console.log(`transformmed array ${doubledResult}`);

console.log('same transformation using map');

function transform(element) {
    return element * 2;
}

const doubledResultUsingMap = scores.map(transform);
console.log(`transformmed array using map ${doubledResultUsingMap}`);


const doubledResultUsingMap2 = scores.map(function transform(element) {
    return element * 2;
});
console.log(`transformmed array using map ${doubledResultUsingMap2}`);


const transformArrowFunction = (element) => element * 2;
const doubledResultUsingMap3 = scores.map(transformArrowFunction);
console.log(`transformmed array using map ${doubledResultUsingMap3}`);


const doubledResultUsingMap4 = scores.map((element) => element * 2);
console.log(`transformmed array using map ${doubledResultUsingMap4}`);


console.log(`transformmed array using map final ${scores.map((element) => element * 2)}`);



const marks = [65, 85, 30, 56, 20, 76];
//Pass,Pass, Fail, Pass, Fail, Pass

function gradeTransform(input) {
    return input > 35 ? "Pass" : "Fail"
}


console.log(`grades calculator = ${marks.map(gradeTransform)}`);

console.log(`grades calculator = ${marks.map((input) => input > 35 ? "Pass" : "Fail")}`);


//filter --> same element with same or reduced lenght
const array3 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//return a array which contains only even numbers [12,14,16, 18, 20]
const resultArray3 = [];
for (const element of array3) {
    if (element % 2 == 0) {
        resultArray3.push(element);
    }
}

console.log(`original array3 = ${array3}`);
console.log(`filtered array = ${resultArray3}`);

function isEven(number) {
    return number % 2 == 0 ? true : false;
}
console.log(`filtered using filter function = ${array3.filter(isEven)}`);


console.log(`filtered using filter function = ${array3.filter(

    (number) => number % 2 == 0 ? true : false

)}`);


const batch = [

    { name: "saloni", course: "fsj", attendance: "90" },
    { name: "supriya", course: "fsj", attendance: "100" },
    { name: "vedant", course: "fsj", attendance: "85" },
    { name: "pratik", course: "fsj", attendance: "86" },
    { name: "chetan", course: "fsj", attendance: "50" },
    { name: "samrat", course: "fsj", attendance: "60" },
];

const dropouts = batch.filter(
    //filter accepts function as input.

    (student_detail) => student_detail.attendance < 75 ? true : false

);

console.log(`dropouts student list with attendance less than 75% `);

for (const student_record of dropouts) {
    console.log(student_record);
}


