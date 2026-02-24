package _03_controlStatements._02_looping._01_for;

public class Demo14 {
    public static void main(String[] args) {
        // print table of a number
        int number = 19;

        for (int i = number; i <= number * 10; i += number) {
            System.out.println(i);
        }

    }
}
