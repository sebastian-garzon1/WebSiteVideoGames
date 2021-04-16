function ingreso(){
	
	var nombre;
    var edad;
    nombre=prompt('Ingrese su nombre:','');
    edad=prompt('Ingrese su edad:','');
	
	
		if (edad < 15)	
		{
		alert("NO cumple con la mayoría de edad, por lo tanto no está autorizado para navegar en nuestra página"); 
		document.write ('NO cumple con la edad estipulada, por lo tanto no está autorizado para navegar en nuestra página');
		alert("Se está enviando al portál de búsquedas principal -- Google --"); 
			location.href="http://www.google.com";
		}
		
		
		else
		{
		alert("Bienvenid@ a nuestra página",nombre); 	
		document.write('Bienvenid@ ');
		document.write(nombre);
		}
}