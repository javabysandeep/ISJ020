package _03_controlStatements._02_looping._01_for;

public class Demo3 {
    public static void main(String[] args) {

        for (; true; ) {
            System.out.println("statement1");
            System.out.println("statement2");
        }
        //System.out.println("Rest of the main body");
        //output : //CTE - Unreachable statement
    }
}
