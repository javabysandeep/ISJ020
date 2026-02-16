public class DataTypeDemo1 {

	public static void main(String[] args){
		
		byte byteValue = 127;
		System.out.println("byteValue = "+byteValue);
		
		short shortValue = 32767;
		System.out.println("shortValue = "+shortValue);
		

		int intValue = 2147483647;
		System.out.println("intValue = "+intValue);
		System.out.println("Integer MIN value = "+Integer.MIN_VALUE);
		System.out.println("Integer MAX value = "+Integer.MAX_VALUE);
		
	
		long longValue = 9223372036854775807L;
		System.out.println("longValue = "+longValue);
		System.out.println("Long MIN value = "+Long.MIN_VALUE);
		System.out.println("Long MAX value = "+Long.MAX_VALUE);
		
		float floatValue = 123.56F;
		System.out.println("floatValue = "+floatValue);
		System.out.println("float MIN value = "+Float.MIN_VALUE);
		System.out.println("float MAX value = "+Float.MAX_VALUE);
		
		double doubleValue = 12455553.56D;
		System.out.println("doubleValue = "+doubleValue);
		System.out.println("double MIN value = "+Double.MIN_VALUE);
		System.out.println("double MAX value = "+Double.MAX_VALUE);
		
		
		char charValue = 'A';
		System.out.println("charValue = "+charValue);
		System.out.println("char MIN value = "+Character.MIN_VALUE);
		System.out.println("char MAX value = "+Character.MAX_VALUE);
		
		char charValue2 = 66;
		System.out.println("charValue2 = "+charValue2);
		
		boolean booleanValue = false;
		System.out.println("booleanValue = "+booleanValue);
		
	}
	
}