package _01_introduction._03_controlStatements._01_conditional;

public class Demo10 {
    public static void main(String[] args) {
        String fileType = "txt";
        switch (fileType) {
            case "pdf" -> {
                System.out.println("pdf");
                System.out.println("pdf");
                System.out.println("pdf");
                System.out.println("pdf");
                System.out.println("pdf");
                System.out.println("pdf");
                System.out.println("pdf");
                System.out.println("pdf");
            }
            case "xls" -> {
                System.out.println("xls");
                System.out.println("xls");
                System.out.println("xls");
                System.out.println("xls");
                System.out.println("xls");
                System.out.println("xls");
                System.out.println("xls");
            }
            case "txt" -> {
                System.out.println("txt");
                System.out.println("txt");
            }
            default -> System.out.println("invalid file format");
        }
    }
}
