var name="Welcome Arun";
var age=21;
alert(name);
var arr=[];
arr.push("ehhlo");
arr.push("hello");
arr.forEach(function(i){
    console.log(i);
})
const nm=document.getElementById("text");
const btn=document.getElementById("btn");
const op=document.getElementById("op1");

function fun1(){
    op.innerHTML=nm.value;
}
