package _03_controlStatements._02_looping._02_while;

public class Demo9 {
    public static void main(String[] args) {
        int left = 0;
        int right = 5;
        while (left <= right) {
            System.out.println(left + " =\t" + right);
            left += 2;
            right++;
        }

        //output : 0=5, 2=6, 4=7, 6=8, 8=9, 10=10
    }
}
