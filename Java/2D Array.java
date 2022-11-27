package Arunkarthick;
import java.util.*;
public class Main {
	public int FindMeasures(String input1, int input2) {
		int n = input2;

		String s = input1;
		int c = 0;
		if (n == 1) {

			for (int i = 0; i < s.length(); i++) {
				if (Character.isAlphabetic(s.charAt(i))) {
					c += 1;
				}
			}
			return c;
		} else if (n == 2) {

			String str[] = s.split(" ");

			return str.length;
		}

		else if (n == 3) {

			String ck = "aeiouAEIOU";
			for (int i = 0; i < s.length(); i++) {
				if (ck.contains(s.charAt(i) + "")) {
					c += 1;
				}
			}

		} else {
			return -1;
		}
		return c;
	}
	
	
		
	
	public static void main(String[] args) {
		Main o=new Main();
		Scanner in=new Scanner(System.in);
		int n=5;
		String arr[][]=new String[5][];
		for(int i=0;i<n;i++) {
			String s=in.next();
			String s1=in.next();
			String a[]=new String[2];
			a[0]=s;
			a[1]=s1;
			arr[i]=a;
		}
		for(String []i:arr) {
		System.out.println(Arrays.toString(i));
		}
		System.out.println(arr[0][1]);
	}

}
