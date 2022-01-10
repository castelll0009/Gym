//Generar QR  con nodejs
/* 
const fs = require("fs"); //acedemos  a files sistem
const qrcode = require("qrcode"); //modulo para generar QR

const urlCv = "wwww";
const  run = async() => {
    const QR= await qrcode.toDataURL(urlCv)
    const htmlContent= `
    <img src="${QR}">
    `;
    fs.writeFileSync('./index-prueba.html', `${htmlContent}`)    
}
run()
*/
alert("entrando  ala  funcion");
//codigo para generar QR , codificando el QR
function  generarQR(){
    alert("entrando  ala  funcion");
    function htmlEncode(value){
        return $('<div/>').text(value).html();
      }
      
      $(function() {
        $("#generate").click(function() {
          $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content").val()) + "&chs=160x160&chld=L|0");
        });
      });      
}
