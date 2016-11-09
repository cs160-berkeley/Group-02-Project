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
import {skinTemplate, tabHeaderLabelTemplate, screenTemplate, foodScreen, infoScreenContainer, favoritesScreenContainer, restroomScreenContainer, merchScreenContainer} from 'mainTemplates';
let foodScreenContainer = Container.template($ => ({
    left:0, right: 0, top: 0, bottom: 55,
    skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
            new tabHeaderLabelTemplate({tabName: "Food"})
            ], 
			name:'foodScreen',
		})] 
}));


var currentScreen = new foodScreenContainer;
application.add(currentScreen);

var NavButton = Container.template($ => ({
    active: true, top: 2, bottom: 2, right: 2, left: 2,
    behavior: Behavior({
        onCreate: function(content){
            this.upSkin = new Skin({
                fill: "transparent", 
                borders: {left: 1, right: 1, top: 1, bottom: 1}, 
                stroke: "white"
            });
            this.downSkin = new Skin({
                fill: "#3AFF3E", 
                borders: {left: 1, right: 1, top: 1, bottom: 1}, 
                stroke: "white"
            });
            content.skin = this.upSkin;
        },
        onTouchBegan: function(content){
            content.skin = this.downSkin;
        },
        onTouchEnded: function(content){
            content.skin = this.upSkin;
            application.remove(currentScreen);  // Remove the old screen from the application
            currentScreen = new $.nextScreen;  // Make the new screen
            application.add(currentScreen);  // Add the new screen to the application
        },
    }),
   contents: [
        Label($, { top: 0, bottom: 0, left: 0, right: 0, 
            style: new Style({ font: "20px", color: "white" }), 
            string: $.string})
   ]
}));


var navBar = new Line({ bottom: 0, height: 55, left: 0, right: 0,
    skin: new Skin({ fill: "black" }),
    contents: [
        new NavButton({ string: "1", nextScreen: favoritesScreenContainer}),
        new NavButton({ string: "2", nextScreen: foodScreenContainer}),
        new NavButton({ string: "3", nextScreen: restroomScreenContainer}),
        new NavButton({ string: "4", nextScreen: merchScreenContainer}),
        new NavButton({ string: "5", nextScreen: infoScreenContainer}),
    ]
});

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
