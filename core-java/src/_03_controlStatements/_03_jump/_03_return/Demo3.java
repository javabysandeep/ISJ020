package _03_controlStatements._03_jump._03_return;

public class Demo3 {
    public static void main(String[] args) {

        for (int i = 1; i <= 3; i++) {

            for (int j = 1; j <= 3; j++) {
                if (j == 2) {
                    return;
                }
                System.out.print(i + " " + j + " ");
            }
            System.out.println();
        }
        //output :
       //1 1
    }
}
