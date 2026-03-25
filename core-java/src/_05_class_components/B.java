package _05_class_components;

public class B {
    public static void main(String[] args) {
        // call A class methods
        A ref = new A();
        ref.im1();
        ref.im2();

        A.sm1();
        A.sm2();

        ref.sm1();
        ref.sm2();
    }
}

