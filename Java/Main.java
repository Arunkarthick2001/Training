package Arunkarthick;
import java.util.*;
public class Main {
	
	
	public static void main(String[] args) {
		
		Scanner in=new Scanner(System.in);
		String s=in.nextLine();
		String fin="";
		for(int i=s.length()-1;i>=0;i--) {
			fin+=s.charAt(i);
		}
		if(s.equals(fin)) {
			System.out.println("Palindrome");
			
		}
		else
			System.out.println("Not a palindrome");
	}

}
