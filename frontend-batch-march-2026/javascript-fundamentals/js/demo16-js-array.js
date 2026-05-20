const scores = [88, 74, 56, 61, 95, 82, 93];

//find the maximum element and second max from this array
let max_number = 0;
let second_max = 0;
for (const element of scores) {
    if (element > max_number) {
        second_max = max_number;
        max_number = element;
    }
    if (element < max_number && element > second_max) {
        second_max = element;
    }

}
console.log(`maximum element in the given array is ${max_number}`);
console.log(`second maximum element in the given array is ${second_max}`);

console.log(`maximum from an array using reduce function`);

// callback function logic that will be given as input to the reduce

const maxUsingReduce = scores.reduce(

    //reduce will call this function = length of the array times
    function maxOfTwoNumbers(number1, number2) {
        return number1 > number2 ? number1 : number2;
    }

);
console.log(`maximum element in the given array  using reduce is ${maxUsingReduce}`);


// find the sum of all array elements
let sumOfArrayElements = 0;
for (const element of scores) {
    sumOfArrayElements += element;

}
console.log(`sum of all array elements is ${sumOfArrayElements}`);


sumOfArrayElements = 0;
sumOfArrayElements = scores.reduce(

    function add(number1, number2) {
        return number1 + number2;
    }
);


console.log(`sum of all array elements using reduce is ${sumOfArrayElements}`);


//search an array
let key = 955;
isPresent = false;
for (const element of scores) {
    if (key === element) {
        isPresent = true;
        break;
    }
}

console.log(isPresent ? `key found` : `key not found`);


//includes - does value exist --> boolean
console.log(scores.includes(95) ? `key found` : `key not found`);
console.log(scores.includes(955) ? `key found` : `key not found`);



//indexOf
let key1 = 95;
isPresent = false;
let index = 0;
for (; index < scores.length; index++) {
    if (key1 === scores[index]) {
        isPresent = true;
        break;
    }
}
console.log(isPresent ? `${key1} found at index = ${index}` : `key not found`);

console.log(`index of given element = ${scores.indexOf(95)}`);
console.log(`index of given element = ${scores.indexOf(965)}`);

//find --> it finds the first element matching the condition ===> element or undefined
const array = [88, 74, 56, 61, 95, 82, 93];
// condition = find first element which is greater than 50
let firstConditionMatchResult = 0;
for (const element of array) {
    if (element > 50) {
        firstConditionMatchResult = element;
        break;
    }
}
console.log(`firstConditionMatchResult = ${firstConditionMatchResult}`);


firstConditionMatchResult = 0;
firstConditionMatchResult = scores.find(
    (input) => input > 50
);

console.log(`firstConditionMatchResult using find = ${firstConditionMatchResult}`);

//findIndex() = it finds the first element matching the condition and returns index or -1

console.log(`index of first element which matches the condition ${scores.findIndex(
    number => number > 50
)}`);


//some() ==>  it finds the any element matching the condition ===> boolean
console.log(`any element which matches the condition  of being greater than 90 ${scores.some(
    number => number > 90
)}`);


//every() ==>  it finds if all elements matching the condition ===> boolean
console.log(`all element which matches the condition  of being greater than 10 ${array.every(
    number => number > 50
)}`);