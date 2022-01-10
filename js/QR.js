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

/*
if( obtenerHoraActual() >= hora_para_generar_primer_qr && obtenerHoraActual() < hora_para_generar_segundo_qr){
    //estamos en la mañana
    generarQR();
    guardar_qr_base_datos();                
} 
*/ 
 var hora_para_generar_primer_qr = "0:00:00";
 var hora_para_generar_segundo_qr = "12:00:00";

var hoy = new Date();   

function obtenerFechaActual(){         
    return fechaHoy = hoy.getFullYear() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getDate();   
}
function obtenerHoraActual(){         
    return hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();   
}
ya_se_genero_el_qr();
/*
if(!ya_se_genero_el_qr()){
    //si no se ha generado entonces identificamos si estamos en la mañana o en la tarde
    if( obtenerHoraActual() >= hora_para_generar_primer_qr && obtenerHoraActual() < hora_para_generar_segundo_qr){
        //estamos en la mañana
        generarQR();
        guardar_qr_base_datos();                
    }else{
        //estamos en la tarde
        generarQR();
        guardar_qr_base_datos();   
    }   
}else{
    //si ya se  genero el qr   que me identifique la hora actual para saber 
    //si debo crear uno nuevo, si no debo crear uno nuevo entonces que me lo baje de la base de datos
    let qr_obtenido = obtener_qr_desde_base_datos();    
    //mostramos el numero entero del Qr en el input
    $('#content').html(qr_obtenido[0].codigo_QR_entero); 
    generarQR();   
}
*/
/*
setInterval(    
    function(){            
            generar_qr_ala_hora("13:41:00", random(1,10000));        
    }, 2000);
//genera QR en la madrugada 0:00:00
setInterval(    
    function(){            
            generar_qr_ala_hora("0:00:00", random(1,10000));        
    }, 2000);
//genera QR despues del medio dia-tarde 12:00:00
setInterval(    
    function(){                
            generar_qr_ala_hora("12:00:00", random(1,10000));            
    }, 2000);    
    */ 
    
//generar numero random con rango
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var contadorHora = 0;
var horaReferencia = "12:00"; // hora para controlar el acceso a la funcion generar hora
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
        guardar_qr_base_datos();                    
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
    alert(document.getElementById("content").value); 
    });
      
});  

function generarQR(){   
    alert("generando");
    document.getElementById("content").value =  random(1,10000);
    $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content").val()) + "&chs=160x160&chld=L|0")            
    //guardar el qr  en una variable entera        
}


function guardar_qr_base_datos(){
    alert("guardando QR base datos");       
  //enpaquetamos los datos  a  subir
    const postDataQR = {        
        codigo_QR_entero: document.getElementById("content").value,
        fecha_generado: obtenerFechaActual(),
        hora_generado: obtenerHoraActual()                                            
    };
    console.log(postDataQR.codigo_QR_entero);    
    console.log(postDataQR.fecha_generado);
    console.log(postDataQR.hora_generado);
  //hago solicitud post para la  base de  datos
    const urlQR ="backend/gym_guardar_QR_generado.php";
    $.post(urlQR, postDataQR, (response) => {        
    console.log("Respuesta si guardo o no en base de datos el QR: "+response);                   
    });
}
var datosQR;
function obtener_qr_desde_base_datos(){
    
    $.ajax({
        url: 'backend/gym_obtener_ultimo_QR.php',
        type: 'GET',
        success: function(response) {
            alert("entrando a obtener qr");
            console.log("QR RESPUESTA" + response);             
            datosQR = JSON.parse(response); 
            console.log(datosQR);                             
            //mostramos en el input html el codigo                    
            document.getElementById("content").value = datosQR[0].codigo_QR_entero;             
        }
        
    });   

}
//funcion que determine si e sla hora de  generar QR y si aun no se ha generado
function ya_se_genero_el_qr(){    
    var respuesta;
    $.post("backend/gym_obtener_ultimo_QR.php", (response) => {  
        respuesta = JSON.parse(response); 
        console.log(respuesta);
        alert(respuesta[0].fecha_generado);
        alert(obtenerFechaActual());
        if(respuesta[0].fecha_generado != obtenerFechaActual()){
            //se la fecha es diferente quiere decir que no se ha generado QR hoy                        
            alert("no se ha generado hoy ");
            //si no se ha generado entonces identificamos si estamos en la mañana o en la tarde                      
            generarQR();
            guardar_qr_base_datos();                            

        }else{
            //si se ha generado un qr hoy puesto que las fechas coinciden     
            alert("YA se genero hoy ");       
            obtener_qr_desde_base_datos();
            generarQR();
        }
    }); 
}