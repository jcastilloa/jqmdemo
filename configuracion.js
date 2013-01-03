function mostrar_configuracion() {	
	  personas = [];
	  tareas = [];	  
	  $("#lista_personas").empty();
	  $("#lista_tareas").empty();
	  personas = leerPersonas();
	  tareas = leerTareas();
	  if (personas.length==0) {
		agregar_input('', "lista_personas");
	  }   
	   
	  for (var i in personas) {	
		   if (!isEmpty(personas[i])) {
		   agregar_input(personas[i], "lista_personas");
		   }
	   }	   
	   if (tareas.length==0) {
		agregar_input('', "lista_tareas");
	   }	   
	   for (var i in tareas) {
		   if (!isEmpty(tareas[i])) {	 
		   agregar_input(tareas[i], "lista_tareas");
		   }
	   }
}

function agregar_input(valor, id_destino) {		
	var miid = '';
	var txt = document.createElement("input");
		txt.type='text';
		txt.attributes['data-mini'] = "true";
		txt.className="ui-input-text ui-body-c ui-corner-all ui-shadow-inset ui-mini"
		txt.value= valor;		   
	var div = document.getElementById(id_destino);
	var div_array = div.getElementsByTagName("input");
	miid = id_destino + div_array.length+1
	txt.id=miid;
	div.appendChild(txt);
	$(miid).focus();	   
}

function btn_guardarPersonas() {
	var marray = [];
	var div = document.getElementById("lista_personas");
	var inputs = div.getElementsByTagName("input");
	
		for (var i in inputs) {		    
			if ((inputs[i].value!='') && (inputs[i].type=="text")) {
				marray.push(inputs[i].value);		
			}
		}
		guardarPersonas(marray);	
	
}

function btn_guardarTareas() {
	var marray = [];
	var div = document.getElementById("lista_tareas");
	var inputs = div.getElementsByTagName("input");
	
		for (var i in inputs) {		    
			if ((inputs[i].value!='') && (inputs[i].type=="text")) {
				marray.push(inputs[i].value);		
			}
		}
		guardarTareas(marray);	
}

function btn_guardarTodo() {
	btn_guardarTareas();
    btn_guardarPersonas();
    document.location.href = PAGINA_INICIO;
}
	
function btn_agregar_persona(){
		agregar_input('', "lista_personas");
}

function btn_agregar_tarea(){
		agregar_input('', "lista_tareas");
}

function init_configuracion() {
	document.getElementById("btnagregar").onclick = btn_agregar_persona;
	document.getElementById("btnguardartodo").onclick = btn_guardarTodo;
	document.getElementById("btnagregartarea").onclick = btn_agregar_tarea;
	mostrar_configuracion();
}

function proteger() {   
   return false;
}

$(document).ready(function(){
init_configuracion();
$('input').live('change', function() {	
	if (event.target.value=='') {
		$("#" + event.target.id).remove();	
	}  
 });

$("#oculto").attr("id","");
$("#visible").attr("id","oculto");

document.getElementsByTagName("input")[1].focus();

});
