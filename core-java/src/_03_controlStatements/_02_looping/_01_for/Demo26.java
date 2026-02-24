package _03_controlStatements._02_looping._01_for;

public class Demo26 {
    public static void main(String[] args) {
        //5 4 3 2 1
        //5 4 3 2
        //5 4 3
        //5 4
        //5

        for (int row = 5; row >= 1; row--) {
            for (int column = row; column >= 1; column--) {
                System.out.print(column + " ");
            }
            System.out.println();
        }
    }
}