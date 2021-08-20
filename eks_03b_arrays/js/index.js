// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let navn = ["Anders ", "Fedtmule ", "Mickey "];

	
	
	function myFunction(array)
	{
		array.forEach(navn => {
			let ListItem = document.createElement('li');
			document.querySelector('#liste').appendChild(ListItem);
			ListItem.textContent = navn;
			ListItem.style.listStyle = 'none';
			console.log(array)
		});	
	}

	myFunction(navn);

}); // Afslutter: DOMContentLoaded