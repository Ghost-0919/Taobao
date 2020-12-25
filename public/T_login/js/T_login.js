var arr1 = document.getElementById("fm")
var arr2 = document.getElementById("fm3")
var err1 = document.getElementById("fm2")
var err2 = document.getElementById("fm4")
var no = document.getElementById("none")
var no1 = document.getElementById("none1")

function over(x) {
    err1.style.display = "none";
    err2.style.display = "none"
    arr1.style.display = "block";
    arr2.style.display = "block";
    no.style.display = "inline-block"
    no1.style.display = "inline-block"
}

function leave(x) {
    arr1.style.display = "none";
    arr2.style.display = "none"
    err1.style.display = "block";
    err2.style.display = "block";
    no.style.display = "none"
    no1.style.display = "none"
}
var code = document.getElementById("QR-code"),
    cont1 = document.getElementById("login-cont2"),
    cont2 = document.getElementById("login-cont1"),
    com = document.getElementById("computer"),
    tip = document.getElementById("log-tip");

function QR(x) {
    code.style.display = "none";
    cont1.style.display = "block";
    cont2.style.display = "none";
    com.style.display = "block";
    tip.style.display = "none";
}

function passlogin(x) {
    code.style.display = "block";
    cont1.style.display = "none";
    cont2.style.display = "block"
    com.style.display = "none";
    tip.style.display = "block";
}

function compu(x) {
    code.style.display = "block";
    cont1.style.display = "none";
    cont2.style.display = "block"
    com.style.display = "none";
    tip.style.display = "block";
}