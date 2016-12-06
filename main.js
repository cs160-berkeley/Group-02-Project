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

// Themes
// START NAVBAR
import {foodQueuesData} from 'dummydata';
import {titleColor, mapScreenContainer, queueProfileScreenContainer, skinTemplate, listScrollerTemplate, HeaderLabelTemplate, screenTemplate, foodScreen, infoScreenContainer, favoritesScreenContainer, restroomScreenContainer, merchScreenContainer} from 'mainTemplates';
let favoritesImage = new Texture("assets/star.png");
let iconBorderColor = titleColor

let foodScreenContainer = Container.template($ => ({
    left:0, right: 0, top: 35, bottom: 50,
    skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
                new HeaderLabelTemplate({titleName: "Food"}),
                listScrollerTemplate(foodQueuesData, {})
            ], 
			name:'foodScreen',
		})] 
}));


export var currentScreen = new foodScreenContainer;
export var prevScreen = currentScreen;
application.add(currentScreen);

export let changeScreensToProfile = function(data) {
    prevScreen = currentScreen;
    application.remove(currentScreen);  // Remove the old screen from the application
    currentScreen = new queueProfileScreenContainer(data);  // Make the new screen
    application.add(currentScreen); 
}


var TopButton = Container.template($ => ({
    active: true, top: 0, bottom: 0, left: $.left, width: 70,
    behavior: Behavior({
        onTouchEnded: function(content){
            application.remove(currentScreen);  // Remove the old screen from the application
            currentScreen = new $.nextScreen;  // Make the new screen
            application.add(currentScreen);  // Add the new screen to the application
        },
    }),
   contents: [
        new Picture({height:22.5,left: 0, url: $.iconURL,
        behavior: Behavior({

        })})
   ]
}));

var topBar = new Line({ top: 0, height: 35, left: 0, width: 480,
    skin: new Skin({ fill: "#282828" }), // # c4c4c4 gray before, now orange
    contents: [
        new TopButton({ iconURL: "assets/map-white.png", left: 0, right: 0, nextScreen: mapScreenContainer}),
        new TopButton({ iconURL: "assets/transparent_header_logo.jpg",left: 40, right: 0, nextScreen: favoritesScreenContainer}),
    ],
    behavior: Behavior({
        // reAddIcons: function(line) {
        //     trace(JSON.stringify(line) + "line\n");
        //     line.add(new TopButton({ iconURL: "assets/menu.png", left: 20, right: 0, nextScreen: favoritesScreenContainer}));
        //     line.add(new TopButton({ iconURL: "assets/map.png", left: -30, right: 0, nextScreen: favoritesScreenContainer}));
        //     line.add(new TopButton({ iconURL: "assets/search.png", right: 0, left: 140, nextScreen: favoritesScreenContainer}));
        // }
    })
});


var NavButton = Container.template($ => ({
    active: true, top: 0, bottom: 0, right: 0, left: 0,
    behavior: Behavior({
        onCreate: function(content){
            if ($.bothBorder == 1) {
                this.upSkin = new Skin({
                    fill: "#282828", 
                    borders: {left: 1, right: 1, top: 0, bottom: 0}, 
                    stroke: "#333333"
                });
            } else {
                this.upSkin = new Skin({
                    fill: "#282828", 
                    borders: {left: 0, right: 1, top: 0, bottom: 0}, 
                    stroke: "#333333"
                });
            }
            this.downSkin = new Skin({
                fill: "transparent", 
                borders: {left: 0, right: 0, top: 0, bottom: 4}, 
                stroke: iconBorderColor 
            });
            if ($.defaultTab) {
                content.skin = this.downSkin;
            } else {
                content.skin = this.upSkin;
            }
            
        },
        onTouchBegan: function(content){
            content.skin = this.downSkin;
        },
        onTouchEnded: function(content){
            application.remove(currentScreen);  // Remove the old screen from the application
            currentScreen = new $.nextScreen; // Make the new screen
            application.add(currentScreen);  // Add the new screen to the application
            application.distribute("onUpdateButtonSkin", this.upSkin); // Update all buttons with skin up.
            content.skin = this.downSkin; // Leave skin down while you're on that screen.
        },
        onUpdateButtonSkin: function(content, newSkin){
            content.skin = newSkin;
        }
    }),
   contents: [
        new Picture({height:26, left: 0, right: 0, url: $.iconURL})
   ]
}));

var navBar = new Line({ bottom: 0, height: 50, left: 0, right: 0,
    skin: new Skin({ fill: "#282828"}),
    contents: [
        new NavButton({ iconURL: "assets/star-white.png", nextScreen: favoritesScreenContainer, defaultTab: false, bothBorder: 2}),
        new NavButton({ iconURL: "assets/food-white.png", nextScreen: foodScreenContainer, defaultTab: true, bothBorder: 1}),
        new NavButton({ iconURL: "assets/restroom-white.png", nextScreen: restroomScreenContainer, defaultTab: false, bothBorder: 1}),
        new NavButton({ iconURL: "assets/merch-white.png", nextScreen: merchScreenContainer, defaultTab: false, bothBorder: 1}),
        new NavButton({ iconURL: "assets/schedule-white.png", nextScreen: infoScreenContainer, defaultTab: false, bothBorder: 0}),
    ]
});


// END NAVBAR
application.add(topBar);
application.add(navBar);

//application.distribute("onUpdateButtonSkin", navBar.contents[0].upSkin);
