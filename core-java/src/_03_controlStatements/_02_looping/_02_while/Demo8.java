package _03_controlStatements._02_looping._02_while;

public class Demo8 {
    public static void main(String[] args) {
        int left = 0;
        int right = 5;
        while (left <= right) {
            System.out.println(left + "=\t" + right);
            left++;
            right++;
        }

        //output : infinite 0=5, 1=6...............
    }
}
