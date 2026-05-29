class BankAccount {
    constructor(name, accountNumber, balance) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= balance;
    }
}
const b1 = new BankAccount("vedant", 123, 1000);

// class SavingsBankAccount {
//     constructor(name, accountNumber, balance, interest) {
//         this.name = name;
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//         this.interest = interest;
//     }
//     deposit(amount) {
//         this.balance += amount;
//     }
//     withdraw(amount) {
//         this.balance -= balance;
//     }
// }

// class CurrentBankAccount {
//     constructor(name, accountNumber, balance) {
//         this.name = name;
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount;
//     }
//     withdraw(amount) {
//         this.balance -= balance;
//     }
// }

class SavingsBankAccount extends BankAccount {
    constructor(name, accountNumber, balance, interest) {
        super(name, accountNumber, balance);
        this.interest = interest;
    }
}

const savingsAccount = new SavingsBankAccount("shubham", 123, 1200, 10);
savingsAccount.deposit(1000);
console.log(` current balance in savings account = ${savingsAccount.balance}`);


// class A extends A {} // error : cyclic inheritance
class A{}
class B extends A{} // single level


class C extends B {}  // multi level inheritance

//class D extends B, C {} // multiple inheritance and not supported


//hierarichal inheritance 
class P{}

class Q extends P{}
class R extends P{}
class S extends P{}
