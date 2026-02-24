package _03_controlStatements._03_jump._03_return;

public class Demo4 {
    public static void main(String[] args) {
        int i = 1;
        while (true) {
            System.out.println(i);
            i++;
            if (i == 5) {
                return;
            }
        }
        //output ---> 1,2,3,4

    }
}
