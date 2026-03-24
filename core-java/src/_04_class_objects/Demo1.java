package _04_class_objects;

public class Demo1 {
    public static void main(String[] args) {
        System.out.println("Static variable = " + User.config);

        User user = new User();
        System.out.println("object created with default values");
        System.out.println("id = " + user.id);
        System.out.println("username = " + user.username);
        System.out.println("password = " + user.password);
        System.out.println("email = " + user.email);
        System.out.println("phone = " + user.phone);

        user.id = 101;
        user.username = "admin";
        user.password = "admin";
        user.email = "admin@gmail.com";
        user.phone = "555-555-5555";

        System.out.println("object values updated");
        System.out.println("id = " + user.id);
        System.out.println("username = " + user.username);
        System.out.println("password = " + user.password);
        System.out.println("email = " + user.email);
        System.out.println("phone = " + user.phone);
    }
}
