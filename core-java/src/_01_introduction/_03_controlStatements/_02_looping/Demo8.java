package _01_introduction._03_controlStatements._02_looping;

public class Demo8 {
    public static void main(String[] args) {
        for (int left = 0, right = 10; ; left++, right--) {
            System.out.println(left + "\t" + right);
        }
        //output --> infinite 0-10, 1-9, 2-8,.....

    }
}
