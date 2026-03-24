package _04_class_objects;

public class Demo2 {
    public static void main(String[] args) {
        System.out.println("user1");
        User1 user1 = new User1();
        System.out.println(user1.id);
        System.out.println(user1.username);
        System.out.println(user1.email);
        System.out.println(user1.password);
        System.out.println(user1.phone);

        System.out.println("user2");
        User1 user2 = new User1();
        System.out.println(user2.id);
        System.out.println(user2.username);
        System.out.println(user2.email);
        System.out.println(user2.password);
        System.out.println(user2.phone);

        System.out.println("user3");
        User1 user3 = new User1();
        System.out.println(user3.id);
        System.out.println(user3.username);
        System.out.println(user3.email);
        System.out.println(user3.password);
        System.out.println(user3.phone);
    }
}
