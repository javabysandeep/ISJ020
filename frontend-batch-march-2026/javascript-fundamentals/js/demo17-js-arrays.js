//sorting numerics without compare function
const array = [10, 9, 11, 14, 5];
console.log(`before sorting ${array}`); //10, 9, 11, 14, 5
array.sort();
console.log(`after sorting ${array}`); //10,11,14,5,9



//sorting strings
const stringArray = ["vedant", "shubham", "samrat", "pushkar", "saloni", "pratik", "mayuresh", "hanumant", "ashitosh"];
console.log(`before sorting ${stringArray}`); //["vedant","shubham","samrat","pushkar","saloni","pratik","mayuresh","hanumant","ashitosh"];
stringArray.sort();
console.log(`after sorting ${stringArray}`); //ashitosh,hanumant,mayuresh,pratik,pushkar,saloni,samrat,shubham,vedant



//sorting numerics with compare function in ascending order
const array2 = [10, 9, 11, 14, 5];
console.log(`before sorting ${array2}`); //10, 9, 11, 14, 5
array2.sort(

    //compare function as input to the sort
    // (number1,number2) => number1 - number2 //ascending order
    (number1, number2) => number2 - number1 //descending order

    // compare function will return
    // + ==> swap
    // - =? dont swap 
    // 0 = don't swap

);
console.log(`after sorting ${array2}`); //5, 9, 10, 11, 14


//destructring 
const scores = [95, 88, 85, 61, 58];
const [first, second, third] = scores;
console.log(first, second, third); //95 88 85

const [element1, , , last] = scores;
console.log(element1, last); //95, 61


// method chaining
const students = [

    { name: "pratik", score: 88, course: "fsj" },
    { name: "vedant", score: 56, course: "fsj" },
    { name: "saloni", score: 91, course: "fsp" },
    { name: "shubham", score: 73, course: "fsj" }

];

//sum  score of students who scored more than 70
const sumOfScoresWhoScoredMoreThan70 = students
    .filter(student => student.score > 70)
    .map(student => student.score)
    .reduce(
        ((accumaltor, currentValue) => accumaltor + currentValue)
    );

console.log(`sum of scores who scored more than 70 is ${sumOfScoresWhoScoredMoreThan70}`); //252


// average score of students who scored more than 70
const avgOfScoresWhoScoredMoreThan70 = students
    .filter(student => student.score > 70)
    .map(student => student.score) //88, 91, 73
    .reduce(

        function callback(accumaltor, currentValue, index, array) {
            return accumaltor + currentValue / array.length;
        }
        , 0);

console.log(`average of scores who scored more than 70 is ${avgOfScoresWhoScoredMoreThan70}`); // 252/3 => 84