const student1 = {
    name: "vedant",
    rollNumber: 101,
    course: "Fullstack java"
};

const student2 = {
    name: "saloni",
    rollNumber: 102,
    course: "Fullstack java"
};

class Student {

    //constructor definition
    constructor(name, rollNumber, course) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.course = course;
    }
}

const student3 = new Student("Vedant", 101, "Fullstack java"); // constructor call
const student4 = new Student("Saloni", 102, "Fullstack java");


class Batch {
    //static variables
    static batchCount = 0; // shared accross all batches

    // instance variables
    constructor(name, startDate) {
        this.name = name;
        this.startDate = startDate;
        this.students = [];
        Batch.batchCount++;
    }

}
const batch1 = new Batch("ISJ021 Full stack Java", "15th June 2026");
const batch2 = new Batch("ISJ022 Full stack Java", "15th July 2026");
const batch3 = new Batch("ISJ023 Full stack Java", "15th August 2026");
console.log(`total batch count = ${Batch.batchCount}`);




/*
    variable types in a class
    01. local variable ---> temporary use ---? directly
    02. instance variable ---> object specific ---> using reference
    03. static variables ---> shared across obejcts of a class --> using classname

*/

class Product {

    static shipper = "Ekart"; // static variable

    constructor(name, price /* name and price are local variables*/) {
        //this.name and this.price are instance variables
        // we are assigning local variable value to instance variables
        this.name = name;
        this.price = price;
    }

}
const p1 = new Product("mobile", 25000);
const p2 = new Product("laptop", 45000);

console.log(`product 1 details  = ${p1.name} | ${p1.price} | ${Product.shipper}`);
console.log(`product 2 details  = ${p2.name} | ${p2.price} | ${Product.shipper}`);


/*

    01. what is class ?
    02. what is an object?
    03. why to use classes?
    04. what is a constructor?
    05. why to use constructor? 
    06. what is this keyword?
    07. what is the use of this keyword?
    08. sytanx to create an object using new keyword?
    09. when and how many times constructor will be called?
    10. what is a local variable?
    11. why to use local variable?
    12. what is the scope of local variable?
    13. how to access local variables?
    14. what is an instance variable?
    15. why to use instance  variable?
    16. what is the scope of instance variable?
    17. how to access instance variables?
    18. what is a static variable?
    19. why to use static variable?
    20. what is the scope of static variable?
    21. how to access static variables?


*/


class Person {
    #password;
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.#password = 'abc';

    }

    //instance method
    introduce() {
        return `Hi, My name is ${this.name}(${this.email})`;
    }

    //static method
    static display() {
        return `sample diplay`;
    }
    #calculate(){}

}
const person1 = new Person("vedant", "vedant@gmail.com");
console.log(person1.introduce());//calling instance method
console.log(Person.display());//calling static method
console.log(person1.password);
//person1.calculate();//error