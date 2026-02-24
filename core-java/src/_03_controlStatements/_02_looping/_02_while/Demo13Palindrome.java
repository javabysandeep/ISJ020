package _03_controlStatements._02_looping._02_while;

public class Demo13Palindrome {
    public static void main(String[] args) {
        int number = 123;
        int oldNumber = number;

        int reverse = 0;
        while (number > 0) {
            int digit = number % 10;
            reverse = reverse * 10 + digit;
            number = number / 10;
        }
        System.out.println("reverse = " + reverse);
        System.out.println(oldNumber == reverse ? "its palindrome" : "its not a palindrome");
    }
}
