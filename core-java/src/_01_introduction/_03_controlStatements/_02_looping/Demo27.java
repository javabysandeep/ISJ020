package _01_introduction._03_controlStatements._02_looping;

public class Demo27 {
    public static void main(String[] args) {
        // 1 0 1 0 1
        // 1 0 1 0
        // 1 0 1
        // 1 0
        // 1
        for (int row = 5; row >= 1; row--) {
            for (int column = 1; column <= row; column++) {
                System.out.print(column % 2 == 0 ? "0" : "1");
                System.out.print(" ");
            }

            System.out.println();
        }
    }
}