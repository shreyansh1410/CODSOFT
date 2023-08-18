var string="0";
var count=0;

for(var i=0;i<document.querySelectorAll(".button").length;i++){

    document.querySelectorAll(".button")[i].addEventListener("click",function(){
        if(count==0 || string=="0"){
            string="";
            document.querySelectorAll(".input").value=string;
        }
        var buttonInnerHTML  = this.innerHTML;
        if(buttonInnerHTML=="="){
            string = eval(string);
            document.querySelector("input").value=string;
        }
        else if(buttonInnerHTML=="AC"){
            string="0";
            document.querySelector("input").value=string;
        }
        else if(buttonInnerHTML=="x"){
            string+="*";
            document.querySelector(".input").value=string;
        }
        else if(buttonInnerHTML=="del"){
            string=string.substring(0,string.length-1);
            document.querySelector(".input").value=string;
        }
        else{
            // console.log(this.innerHTML);
            string+=this.innerHTML;
            document.querySelector("input").value=string;
        }
        count++;
        console.log(string.length);
    })
}
// document.querySelector(".input").value=hello;
// $(".input").text="Hello";
// alert('hello')