// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// Parametre er det man skriver i parantesen ved function navnet //
	function hils(navn)
	{
		console.log(`Hej med dig ${navn}`);
	}
	// Argumenter er det man skriver parantesen under her //
	hils("Andreas");

}); // Afslutter: DOMContentLoaded