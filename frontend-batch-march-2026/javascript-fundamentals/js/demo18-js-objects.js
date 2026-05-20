// create a new object

// student reference will always point to the same object as it is const
const student = {
    //keys will be string
    id: 101,
    name: "shubham",
    course: "full stack java development",
    isActive: false
}; 

// stuedent is reference which pointing an object stores the variables and functions

// reading the object content using dot notation
console.log("reading the object content using dot notation");
console.log(`student id = ${student.id}`);
console.log(`student name = ${student.name}`);
console.log(`student course = ${student.course}`);
console.log(`student isActive = ${student.isActive}`);

// reading the object content using bracket notation
console.log("reading the object content using bracket notation");
console.log(`student id = ${student["id"]}`);
console.log(`student name = ${student["name"]}`);
console.log(`student course = ${student["course"]}`);
console.log(`student isActive = ${student["isActive"]}`);

//  create, update, delete
student.city = "Pune"; // create or adding a new property
student.course="full stack python"; //update an existing property
delete student.isActive; // delete an existing property
console.log(student)


// check property existence  in 
console.log("city" in student);//true
console.log("isActive" in student);//false
console.log(student.hasOwnProperty("name"));//true



const bankAccount = {
   
    //state / property
    customerid : 101,
    accountNumber : 123456,
    balance : 1000,
    accountHolderName : "Shubham",

    //method - function as a object propery

    deposit(balance){
        //this refers to the object on whhich the method was called on
        this.balance += balance;
    },

    withdraw(amount){
        if(amount < this.getBalance()){
            this.balance-= amount;
        }
    },

    getBalance(){
        return this.balance;
    }

};
bankAccount.deposit(1000);
console.log(`bank balance = ${bankAccount.balance}`);
bankAccount.withdraw(500);
console.log(`bank balance = ${bankAccount.balance}`);