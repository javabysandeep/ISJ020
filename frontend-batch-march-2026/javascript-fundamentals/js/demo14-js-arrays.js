const students = ["Akshay", "Ashutosh", "Hanumant", "Pratik", "Pushkar", "Pratik"];
const results = [88, 74, 95, 81, 82, 91];
const mixed = [1, "hello", true, null];
const empty = [];

console.log(students);
console.log(results);
console.log(mixed);
console.log(empty);


console.log("accessing students using index");
console.log(students[0]); //Akshay
console.log(students[1]); //Ashutosh
console.log(students[5]); //Pratik
console.log(students[-5]); //undefined
console.log(students[6]); //undefined

//modifying the element
students[0] = "Akshay Gholve";


console.log('iterating the array elements using traditional loop');
for (let index = 0; index < students.length; index++) {
    const element = students[index];
    console.log(element);

}

console.log('iterating the array elements using for of loop');
console.log(students.push("Rohit"));
for (let element of students) {
    console.log(element);
}


const courseList = ["FSJ", "FSP", "DA", "DS", "DevOps"];
console.log(`adding element to the end using push method =  ${courseList.push("Cyber security")} `);

console.log(`remove element to the end using pop method =  ${courseList.pop()} `);

console.log(`remove element to the start using pop method =  ${courseList.shift()} `);

console.log(`add element to the start using pop method =  ${courseList.unshift("AWS")} `);

