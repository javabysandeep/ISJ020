package _01_introduction._03_controlStatements._01_conditional;

public class Demo6 {
    public static void main(String[] args) {
        int month = 10;

        if (month == 1) System.out.println("jan");
        if (month == 2) System.out.println("Feb");
        if (month == 3) System.out.println("March");
        if (month == 4) System.out.println("Apr");
        if (month == 5) System.out.println("May");
        if (month == 6) System.out.println("June");
        if (month == 7) System.out.println("July");
        if (month == 8) System.out.println("August");
        if (month == 9) System.out.println("Sept");
        if (month == 10) System.out.println("Oct");
        if (month == 11) System.out.println("Nov");
        if (month == 12) System.out.println("Dec");
        if (month > 12 && month < 1) System.out.println("Invalid month");
    }
}
