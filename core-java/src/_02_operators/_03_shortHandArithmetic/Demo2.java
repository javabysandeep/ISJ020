package _02_operators._03_shortHandArithmetic;

public class Demo2 {
    public static void main(String[] args) {
        int number = 12321;
        int original = number;
        int reverse = 0;

        while (number > 0) {
            int lastDigit = number % 10;
            //reverse = reverse * 10 + lastDigit;
            reverse = reverse * 10 + lastDigit;
//            number = number / 10;
            number /= 10;
        }
        System.out.println("Reverse = " + reverse);//
        System.out.println(original == reverse ? "palindrome" : "not palindrome");


    }
}
