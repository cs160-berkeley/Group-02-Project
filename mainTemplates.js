// START SCREENS (triggered by hitting nav buttons)

let favoritesScreen = new Label({string:'Replace with Favorites list'});
let foodScreen = new Label({string:'Replace with Foods list'});
let restroomScreen = new Label({string:'Replace with restroom list'});
let merchScreen = new Label({string:'Replace with Merchandise list'});
let infoScreen = new Label({string:'Replace with Info list'});


// END SCREENS


// START NAVBAR
var NavButton = Container.template($ => ({    active: true, top: 2, bottom: 2, right: 2, left: 2,    behavior: Behavior({        onCreate: function(content){            this.upSkin = new Skin({                fill: "transparent",                 borders: {left: 1, right: 1, top: 1, bottom: 1},                 stroke: "white"            });            this.downSkin = new Skin({                fill: "#3AFF3E",                 borders: {left: 1, right: 1, top: 1, bottom: 1},                 stroke: "white"            });            content.skin = this.upSkin;        },        onTouchBegan: function(content){            content.skin = this.downSkin;        },        onTouchEnded: function(content){            content.skin = this.upSkin;            application.remove(currentScreen);  // Remove the old screen from the application            currentScreen = new $.nextScreen;  // Make the new screen            application.add(currentScreen);  // Add the new screen to the application        },    }),   contents: [        Label($, { top: 0, bottom: 0, left: 0, right: 0,             style: new Style({ font: "20px", color: "white" }),             string: $.string})   ]}));


var navBar = new Line({ bottom: 0, height: 55, left: 0, right: 0,    skin: new Skin({ fill: "black" }),    contents: [        new NavButton({ string: "1", nextScreen: favoritesScreen}),        new NavButton({ string: "2", nextScreen: foodScreen}),        new NavButton({ string: "3", nextScreen: restroomScreen}),
        new NavButton({ string: "4", nextScreen: merchScreen}),
        new NavButton({ string: "5", nextScreen: infoScreen}),    ]});

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