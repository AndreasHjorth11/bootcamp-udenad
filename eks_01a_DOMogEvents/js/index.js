
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	//Opretter en variabel med queryselector til at tage fat og gemme p taggets id//
	let countElement = document.querySelector('#text-count');
	//Tager variablen og ændre text contentet
	let number = 5;
	let plusButton = document.querySelector('#btn-count-increase');
	let minusButton = document.querySelector('#btn-count-decrease');

	function updateNumber(){
		countElement.textContent = number; 
	}

	updateNumber();
	
	
	//() => betyder function
	plusButton.addEventListener("click", () => {
		if(number < 10){
			number++;
			updateNumber(); 
		}
	});

	
	//() => betyder function
	minusButton.addEventListener("click", () => {
		if(number > 0){
			number--;
			updateNumber();
		}
	
	});
}); // Afslutter: DOMContentLoaded