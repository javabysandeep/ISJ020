package _02_operators._06_relationalOperators;

public class Demo2 {
    public static void main(String[] args) {
        System.out.println(10 > 'a');//false
        //System.out.println(10 > "abc");//CTE
        //System.out.println(10 == "abc");//CTE
        //System.out.println(1 == true);//CTE

        System.out.println(99 % 100 == 1);//false
        System.out.println(99 / 100 == 1);//false

        System.out.println(2026 % 400 == 0);//false
        System.out.println(2026 % 100 == 0);//false
        System.out.println(2026 % 4 == 0);//false

        System.out.println(10 % 0 > 0);//ArithmeticException / by zero
    }
}
