import { Injectable } from "@angular/core";
import { NumberValueAccessor } from "@angular/forms";
import { platformBrowser } from "@angular/platform-browser";
export class Formmodel{
    
    Name:String;
    Age:Number;
    Email:String;
    Num:number;
    Place:String;
    constructor(Name:String,Age:number,Email:String,Num:number,Place:String){
        this.Name=Name;
        this.Age=Age;
        this.Email=Email;
        this.Num=Num;
        this.Place=Place;

    }
}