package _02_operators._01_arithmetic;

public class Demo6 {
    public static void main(String[] args) {
        int number = 1234;
        int sum = 0;

        int lastDigit = number % 10;
        sum = sum + lastDigit;
        number = number / 10;


        lastDigit = number % 10;
        sum = sum + lastDigit;
        number = number / 10;


        lastDigit = number % 10;
        sum = sum + lastDigit;
        number = number / 10;

        lastDigit = number % 10;
        sum = sum + lastDigit;
        number = number / 10;


        System.out.println("Sum of digits = " + sum);//10


    }
}
