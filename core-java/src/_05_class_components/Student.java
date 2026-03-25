package _05_class_components;

public class Student {
    int id;
    String name;
    int age;
    static String collegeName = "Pune University";

    //method definition
    public void login(String username, String password) {
        System.out.println("logged in successfully");
    }

    public static void convert(String fileName) {
        System.out.println("file converted to json");
    }

    public static void main(String[] args) {
        // calling same class IM, SM from a SM

        //method call
        Student student = new Student();

        //student.login("admin", "admin");
        student.display();

        Student.convert("student.txt");//recommended
        convert("student.txt"); // since we are in same class
        student.convert("student.txt");



    }


    public void display() {
        // calling same class IM, SM from a IM

        //method call


        login("admin", "admin");
        this.login("admin", "admin");//recommended

        Student.convert("student.txt");//recommended
        convert("student.txt"); // since we are in same class
        this.convert("student.txt");
    }

}
