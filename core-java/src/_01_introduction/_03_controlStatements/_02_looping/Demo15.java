package _01_introduction._03_controlStatements._02_looping;

public class Demo15 {
    public static void main(String[] args) {
        // find the factors of a given number
        // for any given number maximum factor will be it's half.
        // range of factors will be 1 to n/2
        // 6 = 1, 2, 3
        // 16 = 1, 2, 4, 8
        int number = 6;
        for (int i = 1; i <= number / 2; i++) {
            if (number % i == 0) {
                System.out.println("factor =" + i);
            }
        }
    }
}
