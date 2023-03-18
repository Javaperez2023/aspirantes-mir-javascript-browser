const input = document.querySelector(".texto");
const resultado = document.querySelector(".resultado");
const button = document.querySelector(".button");
const palindromo = document.querySelector(".palindromo");

button.addEventListener("click",function(){
	let texto = input.value.toUpperCase();
	let first = "";
	let second = "";
	let resul = "";
	resultado.textContent = texto;
	texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	console.log(texto);
	texto = texto.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
	console.log(texto);
	for (i = 0 ; i < texto.length ; i++){
		if(texto[i] !== " "){
			first = first + texto[i];
		}
	}
	for (i = texto.length - 1 ; i >= 0 ; i--){
		if(texto[i] !== " "){
			second = second + texto[i];
		}
	}
	if (first !== ""){
		if (first === second){
			resul ="¡Es un palíndromo!";
			console.log(second);
			console.log(first);
		}
		else {
			resul ="¡No es un palíndromo!";
			console.log(second);
			console.log(first);
		}
	}
	
	palindromo.textContent = resul;
	
});