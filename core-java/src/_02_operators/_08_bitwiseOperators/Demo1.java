package _02_operators._08_bitwiseOperators;

public class Demo1 {
    public static void main(String[] args) {
        System.out.println(4 & 5);//4
        // 4 ----> 1 0 0
        // 5 ----> 1 0 1
        // 4 <---- 1 0 0
        //System.out.println(4 && 5); // CTE

        System.out.println(4 | 5);//5
        // 4 ----> 1 0 0
        // 5 ----> 1 0 1
        // 5 <---- 1 0 1

        System.out.println(4 ^ 5);//1
        // 4 ----> 1 0 0
        // 5 ----> 1 0 1
        // 1 <---- 0 0 1
    }
}
