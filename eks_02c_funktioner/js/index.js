// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let hilsenFraOle = hils("Ole");

	function hils(navn)
	{
		return `Hej med dig ${navn}`;
	}
	
	console.log(hilsenFraOle);

}); // Afslutter: DOMContentLoaded