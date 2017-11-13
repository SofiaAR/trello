function tarjeta() { // funcion que hara q aparezca nueva tarjeta
	var container= document.getElementById('container');// accediendo al elemento container
	var btn= document.createElement('button');// creando boton
	var input= document.createElement('input'); //creando input
	var nodoText= document.createTextNode('Guardar'); // creando texto

	 // atributos
	 input.setAttribute('id', 'valor'); // entregandole atributos al input

	 //nodos

	 btn.appendChild(nodoText); //diciendo q texto es nodo hijo de btn
	 container.appendChild(btn); // btn nodo hijo de container
	 container.appendChild(input);// input nodo hijo de container

btn.addEventListener('click', function(){ // funcion escuchadora
	var list= document.getElementById('valor').value;// tomando el valor de la lista
	document.getElementById('valor').value="";// tomando el valor de la lista , limpia
	var contiene= document.getElementById('contiene');
	var parrafo= document.createElement('p'); //creando parra q ira en contiene
	var textNuevo= document.createTextNode(list);// creando nuevo elemento de texto
	var add= document.createElement('a');
	add.setAttribute('href', '#');
	var textAdd=document.createTextNode('añadir tarjeta');
	
	parrafo.appendChild(textNuevo);
	contiene.appendChild(parrafo);
	add.appendChild(textAdd);
	contiene.appendChild(add);

	add.addEventListener('click', function(){

		var textarea= document.createElement('textarea');
		var add= document.createElement('a');
		add.setAttribute('href', '#');
		var textAdd=document.createTextNode('añadir tarjeta');
		add.appendChild(textAdd);
		contiene.appendChild(textarea);
		contiene.appendChild(add);
	})

})


}