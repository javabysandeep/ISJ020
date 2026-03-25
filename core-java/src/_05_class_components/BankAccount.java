package _05_class_components;

public class BankAccount {
    int accountNo;
    String name;
    double balance;

    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw(double amount) {
       // if (this.getBalance() > amount) {
        //this is a reference variable which points to the current class object
        if (checkBalance() > amount) {
            balance -= amount;
        }
    }

    public double checkBalance() {
        return balance;
    }

}
