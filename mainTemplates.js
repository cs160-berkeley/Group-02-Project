import KEYBOARD from './keyboard';

import {
    FieldScrollerBehavior,
    FieldLabelBehavior
} from 'field';

// Themes
// *********************************
// *  Different theme colors here *
// *********************************

// export let titleColor = "#C2E9FD" // "diamond" blue
// export let titleColor = "#C3A1E2" // purple
// export let titleColor = "#DA2C38" // red
export let titleColor = "#F2D653" //yellowdd
// export let titleColor = "#ff8a2b" // orange



// *********************************
// *  Different list font sizes here *
// *********************************


	


let bodyColor = "#FFF"
let boldBodyColor = "#FFF"
let bodyNumberColor = "#FFF"
let listEntryBackground = "#121212"

let commentBackgroundColor = "#252525"
let commentNameAndBodyColor = "#FFF"

// START SCREENS (triggered by hitting nav buttons)
let placeHolderStyle = new Style({ font: "20px", color: "black" }), 

// Skins
export let skinTemplate = new Skin({fill: 'transparent'}); // fill in!
let whiteSkin = new Skin({ fill: "white" });
let blackSkin = new Skin({fill: "#FFF"})

let commentSkin = new Skin({fill:commentBackgroundColor });
let bottomBorderSkin = new Skin({borders: {left: 0, right: 0, top: 0, bottom: 0}, stroke: "#000"});
let rightBorderSkin = new Skin({borders: {left: 0, right: 1, top: 0, bottom: 0}, stroke: "#BDBDBD"});
let buttonSkin = new Skin({fill: '#8fc138'});
let blackSkinTrans = new Skin ({fill: "rgba(0,0,0,0.4)"});


let nameInputSkin = new Skin({ borders: { left: 0, right: 0, top: 0, bottom: 2 }, stroke: 'gray' });
let fieldStyle = new Style({ color: 'white', font: 'bold 16px', horizontal: 'left',
    vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5 });
let fieldHintStyle = new Style({ color: '#aaa', font: '16px', horizontal: 'left',
    vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5 });
let fieldLabelSkin = new Skin({ fill: ['transparent', 'transparent', '#C0C0C0', '#acd473'] });

// Style templates
let titleStyle = new Style({font: "bold 36px Roboto", color: titleColor }); 
let titleStyleWhite = new Style({font: "bold 32px Roboto", color: '#fff' }); 
let buttonStyle = new Style({font: "16px Roboto", color: "white"});
let TitleLabelTemplate = Label.template($ => ({string:$.titleName, style:titleStyle}));
let QueueTitleLabelTemplate = Label.template($ => ({string:$.titleName, style:titleStyleWhite}));
export let HeaderLabelTemplate = Label.template($ => ({
	string: $.titleName,
	height: 62,
	skin: skinTemplate,
	style: titleStyle
}));

let bodyStyleWhite = new Style({font:"light 42px Roboto", color:"#fff"});
let bodyNumberStyleWhite = new Style({font:"bold 54px Roboto", color:"#fff"});
let boldBodyStyleWhite = new Style({font:"bold 17px Roboto", color:"#fff"});
let bodyStyle = new Style({font:"light 18px Roboto", color:bodyColor});
let bodyNumberStyle = new Style({font:"bold 30px Roboto", color:bodyNumberColor});
let boldBodyStyle = new Style({font:"bold 18px Roboto", color:boldBodyColor});
let commentNameStyle = new Style({font:"15px Roboto", color: commentNameAndBodyColor});
let commentBodyStyle = new Style({horizontal:"left", font:"12px Roboto", color:"#E8F1F2"});
let commentTimeStyle = new Style({font:"12px Roboto", color:"#A2A77F", horizontal:'right'});
// let commentReplyStyle = new Style({font:"10px Roboto", color:"black"});
let commentsTitleStyle = new Style({font:"bold 24px Roboto", color:titleColor});

let greyedTextStyle = new Style({font: "bold 24px Roboto", color: "#3a3a3a"})

var shadowEffect = new Effect;
shadowEffect.outerShadow(null, 1, 2, 0, 2);


import {prevScreen, currentScreen, changeScreensToProfile} from 'main';

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

let listEntrySkin = new Skin({fill: listEntryBackground, borders: {left: 0, right: 0, top: 1.5, bottom: 0}, stroke: '#333'})


// START LIST TEMPLATES

//let blackTextStyle = new Style({ font: "18px", color: "black" }), 


//Different text labels for each queue entry within a list
let listEntryTitleTemplate = Label.template($ => ({
	left: 15, top: 0, height: 24, string: $.queueName, style: boldBodyStyle, skin: skinTemplate
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
						new listEntryColumnTemplate({content: [new listEntryTitleTemplate({queueName: $.queueName}), new listEntryLocationTemplate({queueLocation: $.location})], data: $}),
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
	top: 0, left: 0, right: 0,
    skin: new Skin({fill: "white"}),
    contents: createContentArray($)

}));

// lets make this shit scroll
export let listScrollerTemplate = VerticalScroller.template($ => ({
	active: true, top:0, clip: true, skin: skinTemplate,
	// contents: [new listColumnTemplate({})]
	contents: [
		new listColumnTemplate($)
	]
}));


// END LIST TEMPLATES

// START SCREENS (triggered by hitting nav buttons)

// This will hold all the other screens
export let screenTemplate = Column.template($ => ({
	name: $.name, top: 0, left: 0, right: 0, active: true, // bottom 55 is for navbar room
	contents: $.contents,
	skin: skinTemplate,
	Behavior: class extends Behavior {
        onTouchEnded(content) {
            KEYBOARD.hide();
            content.focus();
        }
    }
}));



// export let favoritesScreen = Label.template($ => ({string:'Replace with Favorites list',style:placeHolderStyle}));
let emptyQueueText = Column.template($ => ({
<<<<<<< Updated upstream
	top: 0, left: 0, right: 0,
=======
	top: 10, left: 0, right: 0,
>>>>>>> Stashed changes
	contents: [
		Text($, {
			string:"No favorites to show",
			style: greyedTextStyle, right:10, left:10,top:20,bottom:0}
		),
		Picture($, {
			top: 30, height:180, url: "assets/star_large.png"
		}),
		Text($, {
<<<<<<< Updated upstream
			string:"Click the star icon on a queue to favorite it",
=======
			string:"click the star icon on a queue to save it",
>>>>>>> Stashed changes
			style: greyedTextStyle, right:10, left:10,top:20,bottom:0}
		)

	]
}))

export let favoritesScreenContainer = Container.template($ => ({
	left:0, right: 0, top: 35, bottom: 50, clip: true,
	skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
				new HeaderLabelTemplate({titleName: "Favorites"}),
				(favoritesQueuesData.length > 0 ?  // This just puts instructions on how to favorite if there are no favorites
					listScrollerTemplate(favoritesQueuesData, {}): new emptyQueueText({}))
			], 
			name:'foodScreen',
		})] 
}));
// testing differnt way of scrolling content
// export let favoritesScreenContainer = Container.template($ => ({
// 	left:0, right: 0, top: 35, bottom: 50, active: true, 
// 	skin: skinTemplate,
// 	contents: [
// 		VerticalScroller($,{
// 			contents: [
// 				screenTemplate({
// 					contents:[
// 						new HeaderLabelTemplate({titleName: "Favorites"}),
// 						listScrollerTemplate(favoritesQueuesData, {})
// 					], 
// 					name:'foodScreen',
// 				})
// 			]})
// 		]
// }));

export let restroomScreen = Label.template($ => ({string:'Replace with restroom list',style:placeHolderStyle}));
export let restroomScreenContainer = Container.template($ => ({
	left:0, right: 0, top: 35, bottom: 50, clip: true,
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
	left:0, right: 0, top: 35, bottom: 50, clip: true,
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
	left:0, right: 0, top: 35, bottom: 50, clip: true,
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
	skin: commentSkin, top:0, bottom:0, left:0, right:0, active: false,
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
										new Label({style:commentNameStyle, string:$.name})
									]
								}),
								new Column({right:10, left:0,
									contents:[
										new Label({right:0, style:commentTimeStyle, string:$.time }),
									]
								}),
							]
						}),
						new Text({style:commentBodyStyle, left:0, right:5, horo:"left", 
							string: $.comment})
					]
				})	
			]
		})
	]	
}))

export let queueProfileScreenContainer = VerticalScroller.template($ => ({
	skin: skinTemplate, top:35, bottom:50, left:0, right:0, clip: true, active: true,
	contents: [
		screenTemplate({
			contents:[
				new Container({
					top: 0, left: 0, right: 0,
					contents: [
						Picture($, {
							top: 0,left: 0,height: 220, aspect: 'fill',
							width: application.width,
							url: $.picURL,
							Behavior: class extends Behavior{
								onLoaded(picture) {
								}
							}
						}),
						Container($, {
							skin: blackSkinTrans,
							height: application.height,
							top: 0,
							width: 460,
							height: 220
						}),
						new Column({
							left:0, right:0, 
							contents:[
								new Line({
									top:10, left:0, bottom: 15,
									contents:[
										new Column({ left:0, width:70,
											contents:[
												Layer($, {alpha: true, effect: shadowEffect,
													contents: [
														new Picture({height:30, url: "assets/back.png",
															active:true,
															behavior: Behavior({
																	onTouchEnded: function(content) {
																		application.remove(currentScreen);
																		currentScreen = prevScreen;
																		application.add(currentScreen);
																	}
																})
															})
													]
												})
											]
										}),
										new Column({ left:0, width:180,
											contents:[
												Layer($, {alpha: true, effect: shadowEffect,
													contents: [
														new QueueTitleLabelTemplate({titleName: $.queueName})
													]
												})	
											]
										}),
										new Column ({left:5,right:0, width:70,
											active: true,
											contents:[
												new Picture({
													active: true,
													height:30,
													behavior: Behavior({
														onCreate: function(label) {
															if ('favorited' in $) {
																if ($.favorited == true) {
																	label.url = "assets/yellow-star.png";
																} else {
																	label.url = "assets/star-white.png";
																}
															} else {
																label.url = "assets/star-white.png";
															}

														},
														onTouchEnded: function(content) {
															if ('favorited' in $) {
																if ($.favorited == false) {
																	content.url = "assets/yellow-star.png";
																	favoritesQueuesData.push($);
																	$.favorited = true;
																} else {
																	content.url = "assets/star-white.png";
																	$.favorited = false;
																	var index = favoritesQueuesData.indexOf($);
																	favoritesQueuesData.splice(index, 1);
																}
															} else {
																content.url = "assets/yellow-star.png";
																favoritesQueuesData.push($);
																$.favorited = true;
															}
														}
													})
												})
											],
											behavior: Behavior({
												onTouchEnded: function(content) {
													application.distribute("changeStar", $);
												}
											})
										})
									]
								}),
								// Minutes to wait block
								new Line({
									left: 0, right: 0, top: 30,
									contents: [
										new Column({skin:rightBorderSkin, left: 30, right: 0,
											contents:[
												Layer($, {alpha: true, effect: shadowEffect,
													contents: [
														new Label({style:bodyNumberStyleWhite, effect: shadowEffect, string: $.queueLength}),
													]
												}),
												Layer($, {alpha: true, effect: shadowEffect,
													contents: [
														new Label({style:bodyStyleWhite, bottom:10, effect: shadowEffect, string:"minute wait"}),
													]
												})
											]
										}),
										// Minutes to reach block
										new Column({left: 0, right: 30, 
											contents:[
												Layer($, {alpha: true, effect: shadowEffect,
													contents: [
														new Label({style:bodyNumberStyleWhite, effect: shadowEffect, string: "10"}),
													]
												}),
												Layer($, {alpha: true, effect: shadowEffect,
													contents: [
														new Label({style:bodyStyleWhite, bottom:10, effect: shadowEffect, string:"minute walk"}),
													]
												})
											]
										})
									]
								}),
								// Comment block
								Container($, {
									left: 0, right: 0, top: 30,
									contents: [
										new Column({
											top:40, left:0, right:0, editable: true, clip: true,
											contents:[
												// new Container({
												// 	active: true, left: 90, right: 90, bottom: 15, top: 0, height: 30, skin: buttonSkin,
												// 	contents: [new Label({ string: 'new comment', style: buttonStyle })],
												// 	behavior: Behavior({
												// 		onTouchEnded: function(content, id, x, y, ticks) {
												// 			application.distribute("newComment", $);
												// 		}
												// 	})

												// }),
												new Label({style:commentsTitleStyle, string:"What people are saying"}),
												new Container({ 
											    width: 250, height: 36,top:8, skin: nameInputSkin, contents: [
													Scroller($, { 
											            left: 0, right: 0, height: 30, active: true, 
											            clip: true, 
											            contents: [
											                Text($, { 
											                    left: 0, right: 0, top: 0, skin: fieldLabelSkin, 
											                    style: fieldStyle, anchor: 'NAME',
											                    editable: true, string: "",
											                    Behavior: class extends FieldLabelBehavior {
											                        onEdited(label) {
											                            let data = this.data;
											                            data.name = label.string;
											                            label.container.hint.visible = (data.name.length == 0);
											                            application.distribute("textTyped", data.name);
											                        }
											                        getComment(label) {
											                        	application.distribute("onCommentSubmitted", label.string);
											                        	application.bubble("onCommentSubmitted", label.string);
											                        }
											                        onCommentSubmitted(label) {
											                        	label.string = "";
											                        	label.container.hint.visible = 1;
											                        }
											                    },
											                }),
											                Label($, {
											                    left: 0, right: 0, top: 0, style: fieldHintStyle,
											                    string: "Tap to add new comment...", name: "hint"
											                }),
											            ],
											            Behavior: FieldScrollerBehavior
											        }),
												]}),
												new Container({
													active: true, left: 70, right: 70, bottom: 15, top: 15, height: 0, skin: buttonSkin, visible: false,
													contents: [new Label({ string: 'submit comment', style: buttonStyle })],
													behavior: Behavior({
														onTouchEnded: function(content, id, x, y, ticks) {
															application.distribute("getComment");
														},
														textTyped: function(container, data) {
															container.visible = (data.length != 0);
															if (container.visible) {
																// container.top = 10;
																// container.bottom = 10;
																container.height = 30;
															}
														},
														onCommentSubmitted: function(container, data) {
															container.visible = 0;
															container.height = 0;
														}
													})

												}),
												$.comments.map(comment => 
													new commentContainer({name:comment.name, time: "Today at "+comment.time, comment:comment.comment}))
											],
											behavior: Behavior({
										        onCommentSubmitted: function(container, data) {
										        	var date = new Date;
										        	var hour = date.getHours();
										        	var minutes = date.getMinutes();
										        	var AMPM = "AM";
										        	if (hour > 12) {
										        		AMPM = "PM";
										        	}
										        	var commentObj = {name:"Me", time: "Today at " + (hour % 12) + ":" + minutes + AMPM, comment: data};
										            var newComment = new commentContainer(commentObj);
										            var index = 
										            $.comments.push(commentObj);
										            container.add(newComment);
										        },
										        onTouchEnded: function(container, data) {
										            //content.skin = this.upSkin;
										            changeScreensToProfile($.data); // Add the new screen to the application
										        }
										    })
									    })
										
									]
								})
							]
						})
					], 
					name:'queueProfileScreen',
				})
					]
				})
	],
	behavior: Behavior({
		newComment: function(container) {
		}
	})
}));

// END SCREENS
