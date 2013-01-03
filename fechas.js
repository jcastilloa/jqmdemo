function Fechas(mfecha) {
		this.fecha = mfecha;						
}

Fechas.prototype = {  
  sumarDias : function(dias) 
              { return sumarDias(this.fecha, dias); },
  numeroSemana : function() 
              { return getWeekNumber(this.fecha); },
  formato : function()              
              {  return formato_fecha(this.fecha); }
}

//Fechas.prototype.sumarDias = function(dias) { return sumarDias(this.fecha, dias); }
//Fechas.prototype.numeroSemana = function() { alert(2); } //return getWeekNumber(this.fecha); }
//Fechas.prototype.formato = function(){  return formato_fecha(this.fecha); }

function getWeekNumber(d) {
	
	d = new Date(d);
	d.setHours(0,0,0);
	d.setDate(d.getDate() + 4 - (d.getDay()||7));
	var yearStart = new Date(d.getFullYear(),0,1);
	var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7)
	return weekNo;
}

function sumarDias(fecha, dias) {
	var sdias = 86400000 * dias;	
	var segundos = fecha.getTime(); 
	var resultado = new Date();
	resultado.setTime(parseInt(segundos + sdias));	
	return resultado;
}

function formato_fecha(fecha) {			
	var dd = fecha.getDate();
	var mm = (fecha.getMonth());
	var yy = fecha.getFullYear();   
	var mes = "";
	
	  
	switch(mm) {
		case 0: { mes = "Ene";  break;}
		case 1: { mes = "Feb";  break;}
		case 2: { mes = "Mar";  break;}
		case 3: { mes = "Abr";  break;}	
		case 4: { mes = "May";  break;}
		case 5: { mes = "Jun";  break;}
		case 6: { mes = "Jul";  break;}
		case 7: { mes = "Ago";  break;}		
		case 8: { mes = "Sep";  break;}
		case 9: { mes = "Oct";  break;}
		case 10: { mes = "Nov";  break;}
		case 11: { mes = "Dic";  break;}	
	}     
	var sfecha =  dd.toString() + "/" + mes + "/" + yy.toString();	
	return sfecha;
}

