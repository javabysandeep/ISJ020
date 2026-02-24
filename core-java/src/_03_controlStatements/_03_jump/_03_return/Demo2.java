package _03_controlStatements._03_jump._03_return;

public class Demo2 {
    public static void main(String[] args) {

        for (int i = 1; i < 10; i++) {
            if (i % 5 == 0) {
                return;
            }
            System.out.println(i);
        }
        //output : 1, 2, 3,4
    }
}
