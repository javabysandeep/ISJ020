package _03_controlStatements._03_jump._01_break;

public class Demo1 {
    public static void main(String[] args) {

        for (int i = 0; i < 10; i++) {
            if (i % 5 == 0) {
                break;
            }
            System.out.println(i);
            //output : none
            // 0%5 ==> 0
        }
    }
}
