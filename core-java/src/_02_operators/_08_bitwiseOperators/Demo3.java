package _02_operators._08_bitwiseOperators;

public class Demo3 {
    public static void main(String[] args) {
        int number = 1900;
        System.out.println(
                (number % 400 == 0)
                        ||
                        (number % 4 == 0 && number % 100 != 0)
        );
        //2024 --> false || (true && true) ---> true
        //2026 --> false || (false && true) ---> false
        //2000 --> true || - ---> true
        //1900 --> false || true && false ----> false
    }
}
