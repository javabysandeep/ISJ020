public class DataTypeDemo2 {

	public static void main(String[] args){
		//implicit typecasting
		byte a = 100;
		int b = a;
		System.out.println("a="+a);//100
		System.out.println("b="+b);//100
		
		
		//explicit typecasting
		int c = 130;
		byte d = (byte)c;
		System.out.println("c="+c);//100
		System.out.println("d="+d);//100
		
		
	}
	
}