package _01_introduction._03_controlStatements._01_conditional;

public class Demo8 {
    public static void main(String[] args) {
        int month =11;

        switch (month) {
            case 1: System.out.println("jan");break;
            case 2: System.out.println("Feb");break;
            case 3: System.out.println("March");break;
            case 4: System.out.println("Apr");break;
            case 5: System.out.println("May");break;
            case 6: System.out.println("June");break;
            case 7: System.out.println("July");break;
            case 8: System.out.println("August");break;
            case 9:  System.out.println("Sept");break;
            case 10: System.out.println("Oct");break;
            case 11: System.out.println("Nov");break;
            case 12: System.out.println("Dec");break;
            default: System.out.println("Invalid month");break;
        }
    }
}
