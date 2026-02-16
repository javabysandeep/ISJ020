package _02_operators._03_shortHandArithmetic;

public class Demo1 {
    public static void main(String[] args) {
        int number = 5;
        System.out.println(number += 10);// ------> number = number + 10; --> 15
        System.out.println(number -= 10);// ------> number = number - 10; ---> 5
        System.out.println(number *= 10);// ------> number = number * 10; ---> 50
        System.out.println(number /= 10);// ------> number = number / 10; ---> 5
        System.out.println(number %= 10);// ------> number = number % 10; ---> 5
    }
}
