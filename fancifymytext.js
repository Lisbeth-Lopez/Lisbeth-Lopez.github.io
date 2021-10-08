
function bigger(){
    hello();
    var str = document.getElementById("str");
    str.style.fontSize = "24pt";
}

function hello(){
    alert("Hello, world!");
}

function fancy(){
    var check = document.getElementById("fancy");
    var str = document.getElementById("str");
    if(check.checked) {
        str.style.fontWeight = "bold";
        str.style.color = "blue";
        str.style.textDecoration = "underline";
    }else {
        str.style.fontWeight = "normal";
        str.style.color = "black";
        str.style.textDecoration = "none";
    }
}

function moo(){
    var str = document.getElementById("str");
    str.value = (str.value).toUpperCase();
    var parts = str.value.split(".");
    str.value = parts.join("-Moo");
    
}