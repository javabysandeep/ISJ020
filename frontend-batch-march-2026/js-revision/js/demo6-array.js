const array = [1, 2, 3, 4, 5];

// add 1 to each element
/*
    array[0] += 1;
    array[1] += 1;
    array[2] += 1;
    array[3] += 1;
    array[4] += 1;
*/
/*
for (let i = 0; i < array.length; i++) {
    array[i] += 1;
}
*/
function transform(number) {
    return number + 1;
}
/*
    for (let i = 0; i < array.length; i++) {
        array[i] = transform(array[i]);
    }
*/
//const transformedArray = array.map(transform);
/*
    const transformedArray = array.map(function transform(number) {
    return number + 1;
    });
*/
const transformedArray = array.map((number) => number + 1);
console.log(transformedArray);


const students = ["saloni", "supriya", "pratik", "vedant", "shubham"];
// const transformedStudents = [6,7,6,6,7];
const transformedStudents = students.map((element) => element.length);
console.log(`transformed students array = ${transformedStudents}`);


const array2 = [1, 2, 3, 4, 5];
let filteredArray = [];
/*
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] % 2 == 0) {
            filteredArray.push(array2[i]);
        }
    }
*/
function isEven(number) {
    return number % 2 == 0;
}
/*
    for (let i = 0; i < array2.length; i++) {
        if (isEven(array2[i])) {
            filteredArray.push(array2[i]);
        }
    }
*/
// filteredArray = array2.filter(isEven);
filteredArray = array2.filter(number => number % 2 == 0);
console.log(`filteredArray = ${filteredArray}`);



const batch = [

    { name: "saloni", course: "fsj", attendance: "90" },
    { name: "supriya", course: "fsj", attendance: "100" },
    { name: "vedant", course: "fsj", attendance: "85" },
    { name: "pratik", course: "fsj", attendance: "66" },
    { name: "chetan", course: "fsj", attendance: "50" },
    { name: "samrat", course: "fsj", attendance: "60" },
];

let transformedBatch = [];
//find dropouts : attendance < 75%
function findDropouts(student) {
    return student.attendance < 75;
}
for (let i = 0; i < batch.length; i++) {
    if (findDropouts(batch[i])) {
        transformedBatch.push(batch[i]);
    }
}
console.log(`dropouts `);
for (let i = 0; i < transformedBatch.length; i++) {
    console.log(transformedBatch[i]);
}

const scores = [88, 74, 56, 61, 95, 82, 93];
let maximum = Number.MAX_VALUE;

/*
    for (let i = 0; i < scores.length; i++) {
        if (findMax(scores[i], maximum)) {
            maximum = scores[i];
        }
    }
*/
function findMax(a, b) {
    return a > b ? a : b;
}

maximum = scores.reduce(findMax);

console.log(`maximum element = ${maximum}`);


// find the sum of all array elements
let sumOfArrayElements = 0;
for (const element of scores) {
    sumOfArrayElements += element;
}


function add(number1, number2) {
    return number1 + number2;
}

sumOfArrayElements = 0;
sumOfArrayElements = scores.reduce(add);
console.log(`sum of all array elements is ${sumOfArrayElements}`);