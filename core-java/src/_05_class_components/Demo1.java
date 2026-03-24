package _05_class_components;

public class Demo1 {
    int a = 1;
    int b = 2;
    static int c = 3;

    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int c = 30;
        System.out.println("local variables");
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("c = " + c);

        System.out.println("instance variables");
        Demo1 obj = new Demo1();
        System.out.println("a = " + obj.a);
        System.out.println("b = " + obj.b);

        System.out.println("static variables");
        System.out.println("c = " + Demo1.c);
    }
}
