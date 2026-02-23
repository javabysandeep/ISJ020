package _01_introduction._03_controlStatements._02_looping;

public class Demo11 {
    public static void main(String[] args) {
        // print to  1 to 100 which are multiple of 5
        for (int i = 1; i <= 100; i++) {
            if (i % 5 == 0) {
                System.out.println(i);
            }
        }

    }
}
