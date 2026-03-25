package _05_class_components;

public class Demo3BankAccount {
    public static void main(String[] args) {
        BankAccount bankAccount = new BankAccount();
        bankAccount.deposit(500);
        bankAccount.withdraw(500);
    }
}
