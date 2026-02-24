package _03_controlStatements._02_looping._02_while;

public class Demo11 {
    public static void main(String[] args) {
        int number = 123;

        //123%10  --> 3
        //123 /10 --> 12

        //12 % 10 --> 2
        //12 / 10 --> 1

        //1 % 10 --> 1
        //1 /10 -->  0

        int sum = 0;
        while (number > 0) {
            int digit = number % 10;
            sum = sum + digit;
            number = number / 10;
        }
        System.out.println("sum of digits = " + sum);


    }
}
