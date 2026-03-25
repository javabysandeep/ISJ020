package _05_class_components;

public class A {
    public void im1() {
        //call im2, sm1, sm2
        im2();
        this.im2();
        A.sm1();//recommended
        A.sm2();//recommended
        sm1();
        sm2();
        this.sm1();
        this.sm2();
    }

    public void im2() {
        //call im1, sm1, sm2
/*
        im1();
        this.im1();
        A.sm1();//recommended
        A.sm2();//recommended
        sm1();
        sm2();
        this.sm1();
        this.sm2();
*/
        System.out.println("im2");
    }

    public static void sm1() {
        //call im1,im2 sm2
       /*
        A a = new A();
       a.im1();
       a.im2();
       sm2();
       A.sm2();
       a.sm2();
       */
        System.out.println("sm1");

    }

    public static void sm2() {
       /* A a = new A();
       a.im1();
       a.im2();
       sm1();
       A.sm1();
       a.sm1()*/;
        System.out.println("sm2");
    }

    public static void main(String[] args) {
        A a = new A();
        a.im1();
    }
}
