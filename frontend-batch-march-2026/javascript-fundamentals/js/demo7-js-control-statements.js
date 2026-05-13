const marks = 34;

if (marks >= 90) {
    console.log("A grade");
}
else if (marks >= 80 && marks < 90) {
    console.log("B grade");
}
else if (marks >= 70 && marks < 80) {
    console.log("C grade");
}

else if (marks >= 35 && marks < 70) {
    console.log("D grade");
}
else {
    console.log("You failed try something else or retry");
}



const isLoggedIn = false;
const isAdmin = true;


if (isLoggedIn && isAdmin) {
    console.log("Welcome Admin!!");
}
else if (isLoggedIn) {
    console.log("Welcome User!!");
} else {
    console.log("Please login!!");
}
//common mistake --> it is assignment and not equality check
let x = 0;
if (x = 5) console.log('hi its if body');


if ('x' > 0) console.log('x > 1'); /// question


let num = 10;

if (num % 2 == 0) {
    console.log("its an even number");
} else {
    console.log("its an odd number");
}



//switch demo
const digit = 0;

switch (digit) {
    case 0: console.log(`${digit} is = zero`); break;
    case 1: console.log(`${digit} is = one`); break;
    case 2: console.log(`${digit} is = two`); break;
    case 3: console.log(`${digit} is = three`); break;
    case 4: console.log(`${digit} is = four`); break;
    case 5: console.log(`${digit} is = five`); break;
    case 6: console.log(`${digit} is = six`); break;
    case 7: console.log(`${digit} is = seven`); break;
    case 8: console.log(`${digit} is = eight`); break;
    case 9: console.log(`${digit} is = nine`); break;
    default: console.log("invalid digit"); break;
}


const role = "trainer";

switch (role) {

    case "admin": console.log(`${role} has full access`); break;
    case "student": console.log(`${role} has student access`); break;
    case "trainer": console.log(`${role} has teacher access`); break;
    case "guest": console.log(`${role} has guest access`); break;
    case "staff": console.log(`${role} has staff access`); break;
    default : console.log(`invalid access`); break;
}
