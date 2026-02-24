package _03_controlStatements._02_looping._02_while;

public class Demo4 {
    public static void main(String[] args) {
        int i = 0;
        while (i < 10) {
            System.out.println(i);
            i--;
        }
        //output : infinite 0,-1,-2,....
    }
}
