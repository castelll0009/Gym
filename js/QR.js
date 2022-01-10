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
 var  horaActual; 

function obtenerHoraActual(){         
var hoy = new Date();   
    return hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();   
}


setInterval(    
    function(){            
            generar_qr_ala_hora("0:57:00", random(1,10000));        
    }, 2000);

    setInterval(    
        function(){                
                generar_qr_ala_hora("0:59:00", random(1,10000));            
        }, 2000);
        
 
    

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var contadorHora = 0;
var horaReferencia = "12:00:00";
var puedoEntrar = true;
function generar_qr_ala_hora(pHora, numeroRandom){      
    //rango de  hora
    //alert(numeroRandom);
    var rangoMaxHora;    
    rangoMaxHora  = pHora.slice(0, -3);
    rangoMaxHora = rangoMaxHora + ':59';
      //alert("hora actual " + obtenerHoraActual() + " phora "+ pHora + " rango max:"+rangoMaxHora);
    if(obtenerHoraActual() >= pHora && obtenerHoraActual() < rangoMaxHora && horaReferencia != pHora){        
        //insertamos datos en el imnput         
        document.getElementById("content").value = numeroRandom;        
        generarQR();             
        horaReferencia = pHora; 
    }else{     
        //alert("No entra");                   
    }
}

//generarQR();
//codigo para generar QR , codificando el QR
    
function htmlEncode(value){
    return $('<div/>').text(value).html();
}    

$(function() {
    $("#generate").click(function() {
    document.getElementById("content").value =  random(1,10000);        
    $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content").val()) + "&chs=160x160&chld=L|0");
    });
});  

function generarQR(){   
    alert("generando");
    $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content").val()) + "&chs=160x160&chld=L|0");
}

