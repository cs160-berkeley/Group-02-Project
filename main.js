/*
 *     Copyright (C) 2010-2016 Marvell International Ltd.
 *     Copyright (C) 2002-2010 Kinoma, Inc.
 *
 *     Licensed under the Apache License, Version 2.0 (the "License");
 *     you may not use this file except in compliance with the License.
 *     You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing, software
 *     distributed under the License is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 */

// START NAVBAR
import {screenTemplate, foodScreen, infoScreenContainer, favoritesScreenContainer, restroomScreenContainer, merchScreenContainer} from 'mainTemplates';
let favoritesImage = new Texture("assets/star.png");

let foodScreenContainer = Container.template($ => ({
	contents: [
		screenTemplate({
			contents:[new foodScreen({})], 
			name:'foodScreen',
		})] 
}));


var currentScreen = new foodScreenContainer;application.add(currentScreen);

var NavButton = Container.template($ => ({    active: true, top: 0, bottom: 0, right: 0, left: 0,    behavior: Behavior({        onCreate: function(content){            this.upSkin = new Skin({                fill: "#C4C4C4",                 borders: {left: 0, right: 1, top: 0, bottom: 0},                 stroke: "#aeadad"            });            this.downSkin = new Skin({                fill: "#575757",                 //borders: {left: 1, right: 1, top: 1, bottom: 1},                 //stroke: "black"            });            content.skin = this.upSkin;        },        onTouchBegan: function(content){            content.skin = this.downSkin;        },        onTouchEnded: function(content){            content.skin = this.upSkin;            application.remove(currentScreen);  // Remove the old screen from the application            currentScreen = new $.nextScreen;  // Make the new screen            application.add(currentScreen);  // Add the new screen to the application        },    }),   contents: [
        new Picture({height:30, url: $.iconURL})   ]}));


var navBar = new Line({ bottom: 0, height: 55, left: 0, right: 0,    skin: new Skin({ fill: "#C4C4C4" }),    contents: [        new NavButton({ iconURL: "assets/star.png", nextScreen: favoritesScreenContainer}),        new NavButton({ iconURL: "assets/food.png", nextScreen: foodScreenContainer}),        new NavButton({ iconURL: "assets/restroom.png", nextScreen: restroomScreenContainer}),
        new NavButton({ iconURL: "assets/merch.png", nextScreen: merchScreenContainer}),
        new NavButton({ iconURL: "assets/schedule.png", nextScreen: infoScreenContainer}),    ]});

// END NAVBAR
application.add(navBar)

/*
// Main wrapper! Exported to main.js
var mainContainer = new Column(
	{
		name:'mainContainer', top:0, bottom:0, left:0, right:0,
		contents : [
			new Label({string:'asdfasdf'}),
			navBar
			
		]
		
	}
);

//application.add(mainContainer);

 */
