var string="0";
var string2="0";
var count=0;

for(var i=0;i<document.querySelectorAll(".button").length;i++){

    document.querySelectorAll(".button")[i].addEventListener("click",function(){
        if(count==0 || string=="0"){
            string2="";
            string="";
            document.querySelectorAll(".input").value=string2;
        }
        var buttonInnerHTML  = this.innerHTML;
        if(buttonInnerHTML=="="){
            string = eval(string);
            document.querySelector("input").value=string;
        }
        else if(buttonInnerHTML=="%"){
            string+="/100";
            string2+="%"
            document.querySelector(".input").value=string2;
        }
        else if(buttonInnerHTML=="AC"){
            string="0";
            string2="0";
            document.querySelector("input").value=string2;
        }
        else if(buttonInnerHTML=="x"){
            string+="*";
            string2+="x";
            document.querySelector(".input").value=string2;
        }
        else if(buttonInnerHTML=="del"){
            string=string.substring(0,string.length-1);
            string2=string2.substring(0,string2.length-1);
            document.querySelector(".input").value=string2;
        }
        else{
            // console.log(this.innerHTML);
            string+=this.innerHTML;
            string2+=this.innerHTML;
            document.querySelector("input").value=string2;
        }
        count++;
        console.log(string.length);
    })
}
// document.querySelector(".input").value=hello;
// $(".input").text="Hello";
// alert('hello')