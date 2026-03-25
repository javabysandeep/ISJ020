package _05_class_components;

public class Demo2 {
    public static void main(String[] args) {
        Student.convert("student.txt");

        //method call
        Student student = new Student();

        student.login("admin", "admin");
    }
}
