package _03_controlStatements._03_jump._03_return;

public class Demo1 {
    public static void main(String[] args) {

        for (int i = 0; i < 10; i++) {
            if (i % 5 == 0) {
                return;
            }
            System.out.println(i);
        }
        System.out.println("rest of the main");
        //output :
    }
}
