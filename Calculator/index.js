var string = "";
var string2 = "";
var count = 0;

// console.log(document.querySelectorAll(".button"));

//click detector
var res = document.querySelector(".input");

for (var i = 0; i < document.querySelectorAll(".button").length; i++) {

    document.querySelectorAll(".button")[i].addEventListener("click", function () {
        if (count == 0 || string == "0") {
            string2 = "";
            string = "";
            document.querySelectorAll(".input").value = string2;
        }
        var buttonInnerHTML = this.innerHTML;
        if (buttonInnerHTML == "=") {
            string = eval(string);
            document.querySelector(".input").value = string;
        }
        else if (buttonInnerHTML == "%") {
            string += "/100";
            string2 += "%"
            document.querySelector(".input").value = string2;
        }
        else if (buttonInnerHTML == "AC") {
            string = "0";
            string2 = "0";
            document.querySelector(".input").value = string2;
        }
        else if (buttonInnerHTML == "x") {
            string += "*";
            string2 += "x";
            document.querySelector(".input").value = string2;
        }
        else if (buttonInnerHTML == "del" && document.querySelectorAll(".input").value != 0) {
            string = string.substring(0, string.length - 1);
            string2 = string2.substring(0, string2.length - 1);
            document.querySelector(".input").value = string2;
        }
        else {
            console.log(this.innerHTML);
            string += this.innerHTML;
            string2 += this.innerHTML;
            document.querySelector("input").value = string2;
        }
        count++;
        // console.log(string.length);
    })
}


//keypress detect
document.addEventListener("keydown", function (event) {

    if (event.key === "0") {
        string += "0";
        string2 += "0";
        res.value = string;
    }
    else if (event.key === "1") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "1";
        string2 += "1";
        res.value = string;
    }
    else if (event.key === "2") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "2";
        string2 += "2";
        res.value = string;
    }
    else if (event.key === "3") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "3";
        string2 += "3";
        res.value = string;
    }
    else if (event.key === "4") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "4";
        string2 += "4";
        res.value = string;
    }
    else if (event.key === "5") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "5";
        string2 += "5";
        res.value = string;
    }
    else if (event.key === "6") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "6";
        string2 += "6";
        res.value = string;
    }
    else if (event.key === "7") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "7";
        string2 += "7";
        res.value = string;
    }
    else if (event.key === "8") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "8";
        string2 += "8";
        res.value = string;
    }
    else if (event.key === "9") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "9";
        string2 += "9";
        res.value = string;
    }
    if (event.key === "/") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "/";
        string2 += "/";
        res.value = string;
    }
    else if (event.key === "*") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "*";
        string2 += "*";
        res.value = string;
    }
    else if (event.key === "-") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "-";
        string2 += "-";
        res.value = string;
    }
    else if (event.key === "+") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "+";
        string2 += "+";
        res.value = string;
    }
    else if (event.key === "%") {
        if (string === "0")
            string = "";
        res.value = string;
        string += "%";
        string2 += "/100";
        res.value = string;
    }
    else if (event.key === ".") {
        if (string === "0")
            string = "";
        res.value = string;
        string += ".";
        string2 += ".";
        res.value = string;
    }
    if (event.key === "Backspace") {
        string = string.substring(0, string.length - 1);
        if (string.length === 0)
            string = "0";
        res.value = string;
        string2 = string2.substring(0, string2.length - 1);
    }
    if (event.key === "Delete") {
        string = "0";
        string2 = "0";
        res.value = string;
        document.querySelector(".input").style.fontSize = 70 + "px";
    }
    if (event.key === "Enter") {
        const result = eval(string2);
        string = result.toString();
        console.log(string.length);
        // if(string.length>8)
        //     document.querySelector(".input").style.fontSize=50+"px";
        res.value = string;
        string2 = "";
        string = "";
    }
    if (string.length > 8 && string.length <= 12) {
        document.querySelector(".input").style.fontSize = 50 + "px";
    }
    else if(string.length > 12){
        document.querySelector(".input").style.fontSize = 30 + "px";
    }
    else {
        if(event.key!="Enter")
        document.querySelector(".input").style.fontSize = "70px";
    }
});


// const bodyElement = document.body;
// let isDarkMode = true;
// var modeToggle = getElementById("mode-toggle");

function changeTheme(){
    // alert("Hello World!");
    
    let element = document.getElementById("theme");
    if(theme.getAttribute("href") === "light-style.css"){
        theme.setAttribute("href" , "dark-style.css");
        // $(".mode-toggle").text("Light Mode");
        let text = document.getElementsByClassName("mode-toggle")[0];
        text.innerHTML = "Light Mode ☀️";
    }
    else{
        theme.setAttribute("href" , "light-style.css");
        let text = document.getElementsByClassName("mode-toggle")[0];
        text.innerHTML = "Dark Mode 🌙";
    }
    console.log(element);
}