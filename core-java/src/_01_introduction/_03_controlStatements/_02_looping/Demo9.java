package _01_introduction._03_controlStatements._02_looping;

public class Demo9 {
    public static void main(String[] args) {
        for (int left = 0, right = 10; left < right; left++, right--) {
            System.out.println(left + "\t" + right);
        }
        //output --> 0=10, 1=9, 2=8, 3=7, 4=6,

    }
}
