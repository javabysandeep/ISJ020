package _01_introduction._03_controlStatements._01_conditional;

public class Demo7 {
    public static void main(String[] args) {
        //check if the year is leap or not
        /*
         *  leap year : year which is divisible by 4, and if it is century then divisible by 400
         * */
        int year = 2028;

        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
            System.out.println(year + " is a leap year");
        } else {
            System.out.println(year + " is not a leap year");
        }
    }
}
