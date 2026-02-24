package _03_controlStatements._03_jump._02_continue;

public class Demo2 {
    public static void main(String[] args) {

        for (int i = 1; i < 10; i++) {
            if (i % 5 == 0) {
                continue;
            }
            System.out.println(i);
        }
        //output : 1, 2, 3,4,6,7,8,9
    }
}
