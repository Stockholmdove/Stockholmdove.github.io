var roleAnswer=new Array(hulkAnswer = "20",captAnswer = "6",ironManAnswer = "120");

function f(hulkDirect){
    var obj = document.getElementById(hulkDirect);
    if(obj.style.display==""){
        obj.style.display = "none";
    }else{obj.style.display = "";

    }
}
function f(captDirect){
    var obj = document.getElementById(captDirect);
    if(obj.style.display==""){
        obj.style.display = "none";
    }else{obj.style.display = "";

    }
}
function f(ironDirect){
    var obj = document.getElementById(ironDirect);
    if(obj.style.display==""){
        obj.style.display = "none";
    }else{obj.style.display = "";

    }
}

function hulkVerify() {
    var x, text;
    x = document.getElementById("hulkValue").value;

    if (x===hulkAnswer) {
        text = "Correct";
    } else {
        text = "Wrong";
    }
    document.getElementById("hulk").innerHTML = text;
}

function captVerify() {
    var x, text;
    x = document.getElementById("captValue").value;

    if (x===captAnswer) {
        text = "Correct";
    } else {
        text = "Wrong";
    }
    document.getElementById("capt").innerHTML = text;
}
function ironVerify() {
    var x, text;
    x = document.getElementById("ironManValue").value;

    if (x===ironManAnswer) {
        text = "Correct";
    } else {
        text = "Wrong";
    }
    document.getElementById("iron").innerHTML = text;
}
