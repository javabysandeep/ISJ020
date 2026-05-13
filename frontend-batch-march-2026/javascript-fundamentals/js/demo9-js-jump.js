// break ----> stops the loop or switch
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Found 5, stopping.");
        break;
    }
    console.log(i);
}
//output ===> 1, 2, 3, 4, Found 5, stopping.

console.log('continue');
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
//output ===> 1, 2,4,5,7,8,10

let target = 47;
let n = 1;
while (true) {
    if (n === target) {
        console.log(`Reached target ${target} after ${n} steps`);
        break;
    }
    n++;
}

// for ..of for array iteration
const students = ["Mayuresh", "Pratik", "Pushkar", "Supriya", "Vedant"];
for (const name of students) {
    console.log(`Hello, ${name}`);
}

// for ..of for string iteration
const words = "Good morning";
for (const character of words) {
    console.log(character);
}

// for..in used to iterate object keys
const result = {
    "mayuresh": 65,
    "pratik": 67,
    "supriya": 85,
    "vedant": 71,
    "pushkar": 61
};

// this is similar to java for each but it is used for objects to get keys
for(const key in result){
    console.log(key);
}
// mayuresh, pratik, supriya, vedant, pushkar