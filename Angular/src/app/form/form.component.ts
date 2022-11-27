import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Formmodel } from '../form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  Name="";
  Age;
  Email="";
  Num;
  Place="";
  butt=false;
  list:Formmodel[]=[]
  constructor() { 
    if(this.Name!=""){
      this.butt=false;
    }
  }

  ngOnInit(): void {
    
  }

  // butt=true;
  // button(event:any){
  //   if(this.Name!="" && this.Age!=null && this.Email!="" && this.Num!=null && this.Place!=""){
  //    this.butt=false;
  //   } 
  //  }
  
  
  CheckEmail="";
  Emailvalid(){
    var at=0;
    var dot=0;
    for(var i=0;i<this.Email.length;i++){
      if('@'===this.Email.charAt(i)){
        at=i;
      }
      if('.'===this.Email.charAt(i)){
        dot=i;
      }
    }
    if(at<dot && this.Email.substring(dot,this.Email.length)===".com"){

      return true;
    }
    else{
      
      return false;
    }
    
  }
  Warn="";
  EmailWarn="";
  Onclick(event:any){
    if(!this.Emailvalid()){
      if(this.Name!="" && this.Age!=null  && this.Num!=null  && this.Place!=""){
      this.EmailWarn="Enter a valid email address"
      this.Warn="";
      }
      else{
        this.Warn="Enter all feilds to submit your form"
      }
      
    }
    else if(this.Name!="" && this.Age!=null  && this.Num!=null && this.Emailvalid() && this.Place!=""){
    this.list.push(new Formmodel(this.Name, this.Age, this.Email, this.Num, this.Place));
    this.Name="";
    this.Age=null;
    this.Email="";
    this.Num=null;
    this.Place="";
    this.EmailWarn="";
  this.Warn="";}
    else{
      this.Warn="Enter all feilds to submit your form";
    }
    
  }

}
