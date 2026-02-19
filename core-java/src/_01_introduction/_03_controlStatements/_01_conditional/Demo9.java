package _01_introduction._03_controlStatements._01_conditional;

public class Demo9 {
    public static void main(String[] args) {
        int month = 1;

        switch (month) {
            case 1 -> {
                System.out.println("jan");
                System.out.println("jan");
            }
            case 2 -> {
                System.out.println("Feb");
                System.out.println("Feb");
            }
            case 3 -> System.out.println("March");
            case 4 -> System.out.println("Apr");
            case 5 -> System.out.println("May");
            case 6 -> System.out.println("June");
            case 7 -> System.out.println("July");
            case 8 -> System.out.println("August");
            case 9 -> System.out.println("Sept");
            case 10 -> System.out.println("Oct");
            case 11 -> System.out.println("Nov");
            case 12 -> System.out.println("Dec");
            default -> System.out.println("Invalid month");
        }
    }
}
