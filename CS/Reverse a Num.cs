using System;  
  public class ReverseExample  
   {  
     public static void Main(string[] args)  
      {  
                  
       int n= int.Parse(Console.ReadLine());   
       int rev=0;
       while(n!=0)      
       {      
        int rem=n%10;        
        rev=rev*10+rem;      
        n/=10;      
       }      
       Console.Write("Reversed Number is "+rev);       
    }  
  }  