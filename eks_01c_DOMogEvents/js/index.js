// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	//Opretter en variabel med queryselector til at tage fat og gemme p taggets id//
let countElement = document.querySelector('#text-count');
//Tager variablen og ændre text contentet
let number = 5;
let min = 0;
let max	= 10;
let plusButton = document.querySelector('#btn-count-increase');
let minusButton = document.querySelector('#btn-count-decrease');


function updateNumber()
{
	countElement.textContent = number; 
}
updateNumber();

function checkMinMaxValue(direction)
{
	if (direction === "increase")
	{
		if(number < max)
		{
			number++;
			updateNumber();
		}
	}

	if (direction === "decrease")
	{
		if (number > min)
		{
			number--;
			updateNumber();
		}
	}
}

plusButton.addEventListener("click", () => checkMinMaxValue("increase"));
minusButton.addEventListener("click", () => checkMinMaxValue("decrease"));

// 

}); // Afslutter: DOMContentLoaded