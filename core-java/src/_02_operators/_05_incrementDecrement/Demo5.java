package _02_operators._05_incrementDecrement;

public class Demo5 {
    public static void main(String[] args) {
        int a = 1;
        int b = 2;
        int c = 3;
        int d = 4;
        System.out.println(a++ + ++b + c-- + ++a + b--);
        //1 + 3 + 3 + 3 + 3 = 13
        System.out.println("a = " + a);//3
        System.out.println("b = " + b);//2
        System.out.println("c = " + c);//2
        System.out.println("d = " + d);//4
    }
}
