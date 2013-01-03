var personas = [];
var tareas = [];
const PAGINA_INICIO= "index.html";
const PAGINA_CONFIGURACION= "configuracion.html";
var DAY = 86400000;

function guardarPersonas(miarray) {
	var myJSON = "";
	myJSON = JSON.stringify({personas: miarray});	
	localStorage.setItem('personas', myJSON);
	return myJSON;
}

function guardarTareas(miarray) {
	var myJSON = "";
	myJSON = JSON.stringify({tareas: miarray});
	localStorage.setItem('tareas', myJSON);
	return myJSON;
}

function leerPersonas() {
    var myJSON = '';
    var myJSON = localStorage.getItem('personas');
    if (myJSON!=null) {
		var resultArr = JSON.parse(myJSON);
		if (resultArr!=null) {
		return resultArr.personas;
		}
	} else {
		return Array();
	}
}

function leerTareas() {
    var myJSON = '';
    var myJSON = localStorage.getItem('tareas');
    if (myJSON!=null) {
		var resultArr = JSON.parse(myJSON);
		return resultArr.tareas;
	} else {
		return Array();
	}
}

function isEmpty(str) {
	str2 = $.trim(str);
    return (!str || 0 === str.length);
}

function cargar_semana(semana) {
var asemana = [];
var tarea = '';
var tope = 0;
var desptarea = 0;
var resto = 0;
var desplazamiento = 0;
var indice = 0;

tope = personas.length;
resto = semana % tope;

	switch(resto) {
		case 1: { desplazamiento = 0; break; }
		case 2: { desplazamiento = 1; break; }
		case 0: { desplazamiento = 2; break; }			
		
	}
	
	desptarea = desplazamiento;
	
	for (var i in personas) {
			
			if ((desptarea > (tareas.length - 1)) || (desptarea <0)) {			
				desptarea = 0
			} 
												
		    tarea = personas[i] + ":" + tareas[desptarea];
			asemana.push(tarea); 			
			desptarea++;
		
	}
	
	return asemana;
	
}
