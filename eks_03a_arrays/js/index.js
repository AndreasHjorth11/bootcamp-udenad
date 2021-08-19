// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let navn = ["Anders ", "Fedtmule ", "Mickey "];

	navn.forEach(navn => {
		let ListItem = document.createElement('li');
		document.querySelector('#liste').appendChild(ListItem);
		ListItem.innerHTML = navn;
		ListItem.style.listStyle = 'none';
		console.log(navn)
	});




}); // Afslutter: DOMContentLoaded