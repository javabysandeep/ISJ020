package _03_controlStatements._02_looping._02_while;

public class Demo12Reverse {
    public static void main(String[] args) {
        int number = 123;

        //123%10  --> 3
        //123 /10 --> 12

        //12 % 10 --> 2
        //12 / 10 --> 1

        //1 % 10 --> 1
        //1 /10 -->  0

        int reverse = 0;
        while (number > 0) {
            int digit = number % 10;
            reverse = reverse * 10 + digit;
            number = number / 10;
        }
        System.out.println("reverse = " + reverse);


    }
}
