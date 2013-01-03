var tmpSemana = 0;
var anoactual = 0;
var flunes = new Date();
var fdomingo = new Date();
var fechaDeHoy = new Date();

function init(misemana, fecha, seleccionada) {
	
	var hoy30 = 0;
	var domingo30 = 0;
	var hoy = 0;
	var semana = 0;
	var yy = 0;
    var mm = 0;
    var dd = 0;
	
	personas = leerPersonas();
	tareas = leerTareas();
	
	if ((personas.length==0) || (tareas.length==0)) {
		document.location.href = PAGINA_CONFIGURACION;
	}
	
	if(fecha==0) {
		fechaDeHoy = new Date();		
	} else {
		fechaDeHoy = fecha;	
	}
	
	var mFechaHoy = new Fechas(fechaDeHoy);		
	hoy = fechaDeHoy.getDay();	
	if(hoy==0) { //si es domingo
		hoy = 7;
	}	
	semana = mFechaHoy.numeroSemana();
	
	tmpSemana = semana;	
	imprimir_resultado(semana);
	
	dd = fechaDeHoy.getDate();
    mm = (fechaDeHoy.getMonth()) + 1;
    yy = fechaDeHoy.getFullYear();
    
    flunes = mFechaHoy.sumarDias(-(hoy-1));
 	imprimir_semana(flunes, tmpSemana);
		
}

function siguiente_semana() {
	if (tmpSemana == 53) {
		tmpSemana = 1;
		anoactual++;
	} else {
		tmpSemana = tmpSemana + 1;
	}	
	var mFlunes = new Fechas(flunes);
	flunes = mFlunes.sumarDias(7);
	imprimir_semana(flunes, tmpSemana);
}

function anterior_semana() {
	if (tmpSemana > 1) {	
		tmpSemana = tmpSemana - 1;
	} else {
		tmpSemana = 53;
		anoactual--;		
	}	
	var mFlunes = new Fechas(flunes);
	flunes = mFlunes.sumarDias(-7);	
	imprimir_semana(flunes, tmpSemana);
}

function imprimir_semana(mflunes, tmpSemana) {
	
	var mlunes = new Fechas(mflunes);
	var	mdomingo = new Fechas(mlunes.sumarDias(6));
	
	$("#semana").text("Semana nº " + tmpSemana + ", del " + mlunes.formato() + " al " + mdomingo.formato());
	imprimir_resultado(tmpSemana);
}

function imprimir_resultado(semana) {
var resultado = [];
	resultado = cargar_semana(semana);
	
	$("#resultado").empty();	
	for (var i in resultado) {
		agregar_resultado("resultado", resultado[i]);
	}	
}

function agregar_resultado(idobjeto, resultado) {
	
	var objeto = document.getElementById(idobjeto);	
	var marray = resultado.split(":");
	
	var divin = document.createElement("div");
	    divin.className="ui-bar ui-bar-c";
	    divin.innerHTML=marray[0];
	
	var div = document.createElement("div");
	    div.className="ui-block-a";	    	    
	    div.appendChild(divin);	
	    
	    divin = document.createElement("div");
	    divin.className="ui-bar ui-bar-e";
	    divin.innerHTML=marray[1];		   
	    
	var div2 = document.createElement("div");
	    div2.className="ui-block-b";
	    div2.appendChild(divin);		    
	    	    
	objeto.appendChild(div);
	objeto.appendChild(div2);
	      
}

function seleccionar_semana() {
	$('#selsemana').datebox('open');
}

$(document).ready(function(){

init(0, 0, false);

document.getElementById("anterior").onclick = anterior_semana;
document.getElementById("siguiente").onclick = siguiente_semana;
document.getElementById("seleccionar").onclick = seleccionar_semana;

$('#selsemana').live('change', function() {
     var valor = $('#selsemana').val();
     var aa = 0;
     var mm = 0;
     var dd = 0;

     dd = valor.substring(0, 2);
     mm = (valor.substring(3, 5)) - 1;
     aa = valor.substring(6, 10);
     var mfecha = new Date(aa, mm, dd);
     var mdia = new Fechas(mfecha);
     var semana = mdia.numeroSemana();
	 init(semana, mfecha, true);
});

$("#oculto").attr("id","");
$("#visible").attr("id","oculto");
 
});
