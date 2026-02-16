package _02_operators._04_stringConcate;

public class Demo1 {
    public static void main(String[] args) {
        System.out.println(10 + 20);//30
        System.out.println("10" + 20);//1020
        System.out.println("A" + 10 + 20);//A1020
        System.out.println(10 + 20 + "A" + 10);//30A10
        System.out.println("A" + "A");//AA
        System.out.println("A" + "A" + 'A');//AAA
        System.out.println('A' + "A" + 'A');//AAA
        System.out.println('A' + 'A' + "A");//130A
    }
}
