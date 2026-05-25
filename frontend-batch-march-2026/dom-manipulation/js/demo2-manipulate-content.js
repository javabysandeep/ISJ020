const heading = document.querySelector("h1");
const link = document.querySelector("a");

//print the content of elements on console using textContent 
console.log(`heading = ${heading.textContent}`);
console.log(`link = ${link.textContent}`);


// change the Heading and link content
heading.textContent = "Day 01 of Habit building";
link.textContent ="See progress on IT Shaala Website";

//print the content of elements on console using textContent 
console.log(`heading = ${heading.textContent}`);
console.log(`link = ${link.textContent}`);


//get hold of form elements
const usernameInputBox = document.querySelector("input");
console.log(`username entered is ${usernameInputBox.value}`);