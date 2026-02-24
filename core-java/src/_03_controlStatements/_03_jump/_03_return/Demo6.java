package _03_controlStatements._03_jump._03_return;

public class Demo6 {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 5) {
            if (i == 3) {
                return;
            }
            i++;
            System.out.println(i);
        }
        //output:2,3,

    }
}
