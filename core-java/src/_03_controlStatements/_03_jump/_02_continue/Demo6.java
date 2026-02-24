package _03_controlStatements._03_jump._02_continue;

public class Demo6 {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 5) {
            if (i == 3) {
                continue;//loop
            }
            i++;
            System.out.println(i);
        }
        //output:2,3, infinite

    }
}
