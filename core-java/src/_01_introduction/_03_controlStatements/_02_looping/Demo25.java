package _01_introduction._03_controlStatements._02_looping;

public class Demo25 {
    public static void main(String[] args) {
        //1 2 3 4 5
        //1 2 3 4
        //1 2 3
        //1 2
        //1

        for (int row = 5; row >= 1; row--) {
            for (int column = 1; column <= row; column++) {
                System.out.print(column + " ");
            }
            System.out.println();
        }
    }
}