package _03_controlStatements._03_jump._02_continue;

public class Demo3 {
    public static void main(String[] args) {

        for (int i = 1; i <= 3; i++) {

            for (int j = 1; j <= 3; j++) {
                if (j == 2) {
                    continue;
                }
                System.out.print(i + " " + j + " ");
            }
            System.out.println();
        }
        //output :
        //1 1, 1 3
        //2,1, 2,3
        //3,1, 3, 3
    }
}
