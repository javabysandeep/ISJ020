package _02_operators._09_conditional;

public class Demo2 {
    public static void main(String[] args) {
        int year = 2026;

        //leap year is year which is divisible 4
        // and if it is century then it is divisible by 400
        System.out.println(
                year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)
                        ? "its leap year" : "its not a leap year");
    }
}
