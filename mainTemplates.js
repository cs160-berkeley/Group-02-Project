// START SCREENS (triggered by hitting nav buttons)
let placeHolderStyle = new Style({ font: "20px", color: "black" }), 

// Skins
export let skinTemplate = new Skin({fill: 'white'}); // fill in!
let commentSkin = new Skin({fill:"#F2F2F2" });
let bottomBorderSkin = new Skin({fill: 'white', borders: {left: 0, right: 0, top: 0, bottom: 1}, stroke: "#BDBDBD"});

// Style templates
let titleStyle = new Style({font: "bold 25px Roboto", color: "black" }); 
let TitleLabelTemplate = Label.template($ => ({string:$.titleName, style:titleStyle}));
export let HeaderLabelTemplate = Label.template($ => ({
	string: $.titleName,
	height: 48,
	skin: skinTemplate,
	style: titleStyle
}));
let bodyStyle = new Style({font:"light 20px Roboto", color:"black"});
let bodyNumberStyle = new Style({font:"bold 35px Roboto", color:"black"});
let boldBodyStyle = new Style({font:"bold 20px Roboto", color:"black"});
let commentNameStyle = new Style({font:"15px Roboto", color:"black"});
let commentBodyStyle = new Style({horizontal:"left", font:"12px Roboto", color:"black"});
let commentTimeStyle = new Style({font:"12px Roboto", color:"#828282"});
let commentReplyStyle = new Style({font:"10px Roboto", color:"black"});

import {changeScreensToProfile} from 'main';

// IMPORT scrollers
import {
    VerticalScroller,
    VerticalScrollbar,
    TopScrollerShadow,
    BottomScrollerShadow
} from 'scroller/scroller';

import {favoritesQueuesData, foodQueuesData, restroomQueuesData, merchandiseQueuesData, informationQueuesData} from 'dummydata';



let headerStyle = new Style({ font: "34px", color: "black" }), 
let whiteTextStyle = new Style({ font: "34px", color: "white" }), 

let listEntrySkin = new Skin({fill: 'white', borders: {left: 0, right: 0, top: 1, bottom: 0}, stroke: '#c4c4c4'})


// START LIST TEMPLATES

//let blackTextStyle = new Style({ font: "18px", color: "black" }), 


//Different text labels for each queue entry within a list
let listEntryTitleTemplate = Label.template($ => ({
	left: 15, top: 0, bottom: 0, height: 24, string: $.queueName, style: boldBodyStyle, skin: skinTemplate
}));
let listEntryLocationTemplate = Label.template($ => ({left: 15, top: 0, bottom: 0, height: 24, string: $.queueLocation, style:bodyStyle, skin: skinTemplate}));
let listEntryWaitTimeTemplate = Label.template($ => ({right: 15, top: 0, bottom: 0, height: 24, string: $.waitTimeMinutes, style:boldBodyStyle, skin: skinTemplate}));
let listEntryMinuteWaitTemplate = Label.template($ => ({right: 15, top: 0, bottom: 0, height: 24, string: "min wait", style:bodyStyle, skin: skinTemplate}));


//line for two sides of entry info
let listEntryLineTemplate = Line.template($ => ({
	top: 0, bottom: 0, left: 0, right: 0,
	content: [
		new Label({ left: 0, right: 0, top: 0, bottom: 0, string: "abc", 
    style: new Style({color: 'white'}) })
		// new listEntryTitleTemplate({queueName: "HELLLOOOO"}),
		// new listEntryWaitTimeTemplate({waitTimeMinutes: "20"})
	]
}));

let listEntryColumnTemplate = Column.template($ => ({
	left: 0, right: 0, top: 0, active: true,
	contents: $.content,
	behavior: Behavior({
        onBackgroundChange: function(container, data) {
            // container.skin = data.newSkin;
        },
        onTouchEnded: function(container, data) {
        	trace("yes\n");
            //content.skin = this.upSkin;
            changeScreensToProfile($.data); // Add the new screen to the application
        }
    })
}));

//container for a list entry
let listEntryContainer = Container.template($ => ({
	skin: listEntrySkin,
	top: 0, left: 0, right: 0, height: 75, active: true,
	contents: [
		Line($, {left: 0, right: 0,
					contents: [
						new listEntryColumnTemplate({content: [new listEntryTitleTemplate({queueName: $.name}), new listEntryLocationTemplate({queueLocation: $.location})], data: $}),
						new listEntryColumnTemplate({content: [new listEntryWaitTimeTemplate({waitTimeMinutes: $.queueLength}), new listEntryMinuteWaitTemplate({})], data: $}),

					]
				})
	],
}));

let borderContainer = Container.template($ => ({
	skin: listEntrySkin,
	top: 0, left: 0, right: 0, height: 5,
	contents: [
	]
}));

// programatically create containers for each of the list items in data object
// object: JSON data from hardware
var createContentArray = function(object) {
	var contents = [];
	for (var i = 0; i < object.length; i++) {
		contents.push(new listEntryContainer(object[i]));
	}
	contents.push(new borderContainer({}));
	return contents;
};
//column for the two rows of labels (i.e. row 1 = title, row 2 = location) for each list entry
let listColumnTemplate = Column.template($ => ({
	top: 0, bottom: 0, left: 0, right: 0,
    skin: new Skin({fill: "white"}),
    contents: createContentArray($)

}));

// lets make this shit scroll
export let listScrollerTemplate = VerticalScroller.template($ => ({
	active: true, top:0, bottom: 0, skin: new Skin({fill: 'white'}),
	// contents: [new listColumnTemplate({})]
	contents: [
		new listColumnTemplate($)
	]
}));


// END LIST TEMPLATES

// START SCREENS (triggered by hitting nav buttons)

// This will hold all the other screens
export let screenTemplate = Column.template($ => ({
	name: $.name, top: 0, bottom: 60, left: 0, right: 0, // bottom 55 is for navbar room
	contents: $.contents,
	skin: skinTemplate
}));



// export let favoritesScreen = Label.template($ => ({string:'Replace with Favorites list',style:placeHolderStyle}));
export let favoritesScreenContainer = Container.template($ => ({
	left:0, right: 0, top: 45, bottom: 60,
	skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
				new HeaderLabelTemplate({titleName: "Favorites"}),
				listScrollerTemplate(favoritesQueuesData, {})
			], 
			name:'foodScreen',
		})] 
}));

export let restroomScreen = Label.template($ => ({string:'Replace with restroom list',style:placeHolderStyle}));
export let restroomScreenContainer = Container.template($ => ({
	left:0, right: 0, top: 45, bottom: 60,
	skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
				new HeaderLabelTemplate({titleName: "Restrooms"}),
				listScrollerTemplate(restroomQueuesData, {})
			], 
			name:'foodScreen',
		})] 
}));


export let merchScreen = Label.template($ => ({string:'Replace with Merchandise list',style:placeHolderStyle}));
export let merchScreenContainer = Container.template($ => ({
	left:0, right: 0, top: 45, bottom: 60,
	skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
			new HeaderLabelTemplate({titleName: "Merchandise"}),
			listScrollerTemplate(merchandiseQueuesData, {})
			], 
			name:'foodScreen',
		})] 
}));

let infoScreen = Label.template($ => ({string:'Replace with Info list', style:placeHolderStyle}));
export let infoScreenContainer = Container.template($ => ({
	left:0, right: 0, top: 45, bottom: 60,
	skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
			new HeaderLabelTemplate({titleName: "Information"}),
			listScrollerTemplate(informationQueuesData, {})
			], 
			name:'foodScreen',
		})] 
}));

export let foodScreen = Label.template($ => ({string:'Replace with Foods list', style:placeHolderStyle}));
// Foodscreen instantiated in main.js

let commentContainer = Container.template($ => ({
	skin: commentSkin, top:0, bottom:0, left:0, right:0,
	contents: [
		new Line({
			top:5, bottom:5, left:0, right:0,
			contents: [
				new Picture({height:30, url: "assets/empty-profile.png"}),
				new Column({
					left:0, right:10,
					contents:[
						new Line({
							left:0, right:0,
							contents:[
								new Column({ left:0,
									contents:[
										new Label({style:commentNameStyle, string:$.userName})
									]
								}),
								new Column({ left:5, 
									contents:[
										new Label({left:5, style:commentTimeStyle, string:$.timePosted }),
									]
								}),
								new Column({ left:0, right:0, 
									contents:[
										new Label({right:0, style:commentReplyStyle, string:"Reply"}),
									]
								}),
							]
						}),
						new Text({style:commentBodyStyle, left:0, right:5, horo:"left", 
							string: $.commentBody})
					]
				})	
			]
		})
	]	
}))

export let queueProfileScreenContainer = Container.template($ => ({
	skin: skinTemplate, top:45, bottom:60, left:0, right:0, 
	contents: [
		screenTemplate({
			contents:[
				new Column({
					left:0, right:0, 
					contents:[
						new Line({
							top:10, bottom:15, left:0,
							contents:[
								new Column({ left:0, width:70,
									contents:[
										new Picture({height:30, url: "assets/back.png"})
									]
								}),
								new Column({ left:0, width:180,
									contents:[
										new TitleLabelTemplate({titleName: $.name})
									]
								}),
								new Column ({left:5,right:0, width:70,
									contents:[
										new Picture({height:30, url: $.favoriteURL})
									]
								})
							]
						}),
						// Minutes to wait block
						new Column({skin:bottomBorderSkin, width: 100, 
							contents:[
								new Label({style:bodyNumberStyle, string: $.queueLength}),
								new Label({style:bodyStyle, bottom:10, string:"min wait"}),
							]
						}),
						// Minutes to reach block
						new Column({skin:bottomBorderSkin, width:100, top:10, 
							contents:[
								new Label({style:bodyNumberStyle, string: "10"}),
								new Label({style:bodyStyle, bottom:10, string:"mins to reach"}),
							]
						}),
						// Comment block
						new Column({top:25, left:0, right:0, 
							contents:[
								new Label({style:boldBodyStyle, bottom:10, string:"What people are saying"}),
								$.comments.map(comment => 
									new commentContainer({userName:comment.name, timePosted: "Today at "+comment.time, commentBody:comment.comment}))
							]
						})
						
					]
				})
			], 
			name:'queueProfileScreen',
		})] 
}));

// END SCREENS
