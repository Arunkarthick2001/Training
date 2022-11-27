using System;
class GFG{

static void Main(string[] args)
{
	
	string str = "ArunKarthick";
	string revstr = String.Empty;
	for(int i = str.Length - 1; i > -1; i--)
	{
		revstr += str[i];
	}
	Console.WriteLine(revstr);
}
}
