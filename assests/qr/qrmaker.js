function qr(){
    var tq = document.getElementById("tq").value;
    var x="https://api.qrserver.com/v1/create-qr-code/?data=+"+tq+"&size=500x500";

    var img = document.createElement("img");

    img.src = x;
    var src = document.getElementById("x");

    src.appendChild(img);

}