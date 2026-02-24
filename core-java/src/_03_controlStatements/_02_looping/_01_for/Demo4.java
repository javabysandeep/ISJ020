package _03_controlStatements._02_looping._01_for;

public class Demo4 {
    public static void main(String[] args) {

        for (; /*false*/; ) {
            System.out.println("statement1");
            System.out.println("statement2");
        }
        //output : //CTE - Unreachable statement
    }
}
