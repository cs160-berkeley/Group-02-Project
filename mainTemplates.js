// START SCREENS (triggered by hitting nav buttons)

let favoritesScreen = new Label({string:'Replace with Favorites list'});
let foodScreen = new Label({string:'Replace with Foods list'});
let restroomScreen = new Label({string:'Replace with restroom list'});
let merchScreen = new Label({string:'Replace with Merchandise list'});
let infoScreen = new Label({string:'Replace with Info list'});


// END SCREENS


// START NAVBAR
var NavButton = Container.template($ => ({


var navBar = new Line({ bottom: 0, height: 55, left: 0, right: 0,
        new NavButton({ string: "4", nextScreen: merchScreen}),
        new NavButton({ string: "5", nextScreen: infoScreen}),

// END NAVBAR

// Main wrapper! Exported to main.js
export var mainContainer = new Column(
	{
		name:'mainContainer', top:0, bottom:0, left:0, right:0,
		contents : [
			new Label({string:'jews'}),
			navBar
			
		]
		
	}
);