package _03_controlStatements._03_jump._01_break;

public class Demo5 {
    public static void main(String[] args) {
        int i = 1;
        do {
            System.out.println(i);
            if (i++ == 3) {
                break;
            }
        } while (i <= 5);
        //output : 1,2,3

    }
}
