package _01_introduction._03_controlStatements._01_conditional;

public class Demo11 {
    public static void main(String[] args) {
        int month = 10;
        String result = switch (month) {
            case 1 -> "jan";
            case 2 -> "Feb";
            case 3 -> "March";
            case 4 -> "Apr";
            case 5 -> "May";
            case 6 -> "June";
            case 7 -> "July";
            case 8 -> "August";
            case 9 -> "Sept";
            case 10 -> "Oct";
            case 11 -> "Nov";
            case 12 -> "Dec";
            default -> "Invalid month";
        };
        System.out.println(result);
    }
}
