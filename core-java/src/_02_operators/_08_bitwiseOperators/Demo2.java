package _02_operators._08_bitwiseOperators;

public class Demo2 {
    public static void main(String[] args) {
        System.out.println(10 > 20 & 10 % 0 == 0);//ArithmeticException
        System.out.println(10 < 20 | 10 % 0 == 0);//ArithmeticException
        System.out.println(10 > 20 | 10 % 0 == 0);//ArithmeticException
        System.out.println(10 < 20 & 10 % 0 == 0);//ArithmeticException
    }
}
