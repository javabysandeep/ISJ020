package _01_introduction._03_controlStatements._01_conditional;

public class Demo5 {
    public static void main(String[] args) {
        int number = 10;

        if (number % 2 == 0) {
            System.out.println("Its an even number");
        }
            //System.out.println("independent statement between if and else are not allowed");
        else {
            System.out.println("Its an odd number");
        }
    }
}
