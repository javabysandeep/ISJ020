package _01_introduction._03_controlStatements._02_looping;

public class Demo18PrimeNumber {
    public static void main(String[] args) {
        // prime number = number which does not have factors apart from 1 and number itself.
        //e.g. 11, 13, 17, 19, 23, 29, 31, 37, 41, 43
        boolean isPrime = true;
        int number = 11;
        //6%2==0 ---> stop
        for (int i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                //we got the factor i.e. not a prime
                isPrime = false;
                break;// this stops the loop
            }
        }
        System.out.println(isPrime ? "its prime" : "not a prime");
    }
}
