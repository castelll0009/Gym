/*
var input_porcentaje=document.querySelector("#percent");
input_porcentaje.addEventListener("click",function(){
    event.stopPropagation();
});
*/

var input_horas=document.querySelector("#id-horas");
input_horas.addEventListener("click",function(){
    event.stopPropagation();
});

//calcular  los puntos subi en porcentaeje
let porcentaje_hora = 3.33;
let minutos_ejercicio = 60;
let var_minutos= 0;
var var_puntos_subir_porcentaje = 0 ;

var input_boton_escanear=document.querySelector("#id-boton-escanear");
input_boton_escanear.addEventListener("click",function(){
    event.stopPropagation();   
    //capturar lo que esta en el input de horas
    var_minutos = $('#id-horas').val();    
    //cuando click me haga la regla de  3 par calcular cuantos puntos debo de subir en porcentaje por una cantidad de horas de ejercicio
    var_puntos_subir_porcentaje = (porcentaje_hora * var_minutos)/minutos_ejercicio; 
    //alert(var_puntos_subir_porcentaje);
    //insertar este valor en el CIRCULO DE PROGRESO    
    insertarCirculoPorcetaje(var_puntos_subir_porcentaje);
    
});


function insertarCirculoPorcetaje(val){  
  //alert("valor dentor de funion" +val);
  //var val = parseInt($(this).val());  
  var $circle = $('#svg #bar');
  
  if (isNaN(val)) {
   val = 100; 
  }
  else{
    var r = $circle.attr('r');
    var c = Math.PI*(r*2);
   
    if (val < 0) { val = 0;}
    if (val > 100) { val = 100;}
    
    var pct = ((100-val)/100)*c;
    
    $circle.css({ strokeDashoffset: pct});
    
    $('#cont').attr('data-pct',val);
  }
}
/*
$('#percent').on('change', function(){
    var val = parseInt($(this).val());
    var $circle = $('#svg #bar');
    
    if (isNaN(val)) {
     val = 100; 
    }
    else{
      var r = $circle.attr('r');
      var c = Math.PI*(r*2);
     
      if (val < 0) { val = 0;}
      if (val > 100) { val = 100;}
      
      var pct = ((100-val)/100)*c;
      
      $circle.css({ strokeDashoffset: pct});
      
      $('#cont').attr('data-pct',val);
    }
  });
  */