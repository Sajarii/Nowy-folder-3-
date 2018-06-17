
function pokaAuto (Autoo) {
    var i;
    var x = document.getElementsByClassName("info");
    for (i = 0; i < x.length; i++) {
       x[i].style.display ="none";  
    }
    document.getElementById(Autoo).style.display ="block";  
}