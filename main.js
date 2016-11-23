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
import {foodQueuesData} from 'dummydata';
import {queueProfileScreenContainer, skinTemplate, listScrollerTemplate, HeaderLabelTemplate, screenTemplate, foodScreen, infoScreenContainer, favoritesScreenContainer, restroomScreenContainer, merchScreenContainer} from 'mainTemplates';
let favoritesImage = new Texture("assets/star.png");

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


var currentScreen = new foodScreenContainer;
application.add(currentScreen);

export let changeScreensToProfile = function(data) {
    application.remove(currentScreen);  // Remove the old screen from the application
    currentScreen = new queueProfileScreenContainer(data);  // Make the new screen
    application.add(currentScreen); 
}


var TopButton = Container.template($ => ({
    active: false, top: 0, bottom: 0, left: $.left, width: 70,
    // behavior: Behavior({
    //     // onCreate: function(content){
    //     //     this.upSkin = new Skin({
    //     //         fill: "#C4C4C4", 
    //     //     });
    //     //     this.downSkin = new Skin({
    //     //         fill: "#575757", 
    //     //     });
    //     //     content.skin = this.upSkin;
    //     },
    //     onTouchBegan: function(content){
    //         // content.skin = this.downSkin;
    //     },
    //     onTouchEnded: function(content){
    //         // content.skin = this.upSkin;
    //         // application.remove(currentScreen);  // Remove the old screen from the application
    //         // currentScreen = new $.nextScreen;  // Make the new screen
    //         // application.add(currentScreen);  // Add the new screen to the application
    //     },
    // }),
   contents: [
        new Picture({height:22.5,left: 0, url: $.iconURL,
        behavior: Behavior({

        })})
   ]
}));

var topBar = new Line({ top: 0, height: 35, left: 0, width: 480,
    skin: new Skin({ fill: "#ff8a2b" }), // # c4c4c4 gray before, now orange
    contents: [
        new TopButton({ iconURL: "assets/menu.png", left: 20, right: 0, nextScreen: favoritesScreenContainer}),
        new TopButton({ iconURL: "assets/map.png", left: -30, right: 0, nextScreen: favoritesScreenContainer}),
        new TopButton({ iconURL: "assets/search.png", right: 0, left: 140, nextScreen: favoritesScreenContainer}),
    ],
    behavior: Behavior({
        reAddIcons: function(line) {
            trace(JSON.stringify(line) + "line\n");
            line.add(new TopButton({ iconURL: "assets/menu.png", left: 20, right: 0, nextScreen: favoritesScreenContainer}));
            line.add(new TopButton({ iconURL: "assets/map.png", left: -30, right: 0, nextScreen: favoritesScreenContainer}));
            line.add(new TopButton({ iconURL: "assets/search.png", right: 0, left: 140, nextScreen: favoritesScreenContainer}));
        }
    })
});


var NavButton = Container.template($ => ({
    active: true, top: 0, bottom: 0, right: 0, left: 0,
    behavior: Behavior({
        onCreate: function(content){
            this.upSkin = new Skin({
                fill: "#ff8a2b", 
                borders: {left: 0, right: 1, top: 0, bottom: 0}, 
                stroke: "#aeadad"
            });
            this.downSkin = new Skin({
                fill: "#ef6300", 
                //borders: {left: 1, right: 1, top: 1, bottom: 1}, 
                //stroke: "black"
            });
            content.skin = this.upSkin;
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
        new Picture({height:30, left: 0, right: 0, url: $.iconURL})
   ]
}));

var navBar = new Line({ bottom: 0, height: 50, left: 0, right: 0,
    skin: new Skin({ fill: "#ff8a2b" }),
    contents: [
        new NavButton({ iconURL: "assets/star.png", nextScreen: favoritesScreenContainer}),
        new NavButton({ iconURL: "assets/food.png", nextScreen: foodScreenContainer}),
        new NavButton({ iconURL: "assets/restroom.png", nextScreen: restroomScreenContainer}),
        new NavButton({ iconURL: "assets/merch.png", nextScreen: merchScreenContainer}),
        new NavButton({ iconURL: "assets/schedule.png", nextScreen: infoScreenContainer}),
    ]
});

// END NAVBAR
application.add(topBar);
application.add(navBar);

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
