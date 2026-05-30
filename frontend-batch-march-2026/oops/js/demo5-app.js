// destination file
// import named exports require curly braces mandatory
import { Student, format } from "./demo4-student.js";
const s1 = new Student(101, "shubham");
console.log(s1.id + " " + s1.name);
console.log(format(100));

// import default --> curly braces not requried and can give any name.
import b from "./demo4-student.js";


// React is default export as we have not used curley braces, 
// Component is named export as we are using curley braces
// from React is module
// we are trying to use the code from react module
import React, {Component} from "react";

class Welcome extends Component{
    render(){
        
    }
}
