// START SCREENS (triggered by hitting nav buttons)
let placeHolderStyle = new Style({ font: "20px", color: "black" }), 

// Skins
let skinTemplate = new Skin({fill: 'white'}); // fill in!
let commentSkin = new Skin({fill:"#F2F2F2" });
let bottomBorderSkin = new Skin({fill: 'white', borders: {left: 0, right: 0, top: 0, bottom: 1}, stroke: "#BDBDBD"});

// Style templates
let titleStyle = new Style({font: "bold 25px Roboto", color: "black" }); 
let titleLabelTemplate = Label.template($ => ({string:$.titleName, style:titleStyle}));
let bodyStyle = new Style({font:"light 20px Roboto", color:"black"});
let bodyNumberStyle = new Style({font:"bold 35px Roboto", color:"black"});
let boldBodyStyle = new Style({font:"bold 20px Roboto", color:"black"});
let commentNameStyle = new Style({font:"15px Roboto", color:"black"});
let commentBodyStyle = new Style({horizontal:"left", font:"12px Roboto", color:"black"});
let commentTimeStyle = new Style({font:"12px Roboto", color:"#828282"});
let commentReplyStyle = new Style({font:"10px Roboto", color:"black"});

// This will hold all the other screens
export let screenTemplate = Column.template($ => ({
	name: $.name, top: 0, bottom: 55, left: 0, right: 0, // bottom 55 is for navbar room
	contents: $.contents, skin: skinTemplate
}));

export let favoritesScreen = Label.template($ => ({string:'Replace with Favorites list',style:placeHolderStyle}));
export let favoritesScreenContainer = Container.template($ => ({
	contents: [
		screenTemplate({
			contents:[new favoritesScreen({})], 
			name:'foodScreen',
		})] 
}));

export let restroomScreen = Label.template($ => ({string:'Replace with restroom list',style:placeHolderStyle}));
export let restroomScreenContainer = Container.template($ => ({
	contents: [
		screenTemplate({
			contents:[new restroomScreen({})], 
			name:'foodScreen',
		})] 
}));


export let merchScreen = Label.template($ => ({string:'Replace with Merchandise list',style:placeHolderStyle}));
export let merchScreenContainer = Container.template($ => ({
	contents: [
		screenTemplate({
			contents:[new merchScreen({})], 
			name:'foodScreen',
		})] 
}));

let infoScreen = Label.template($ => ({string:'Replace with Info list', style:placeHolderStyle}));
export let infoScreenContainer = Container.template($ => ({
	contents: [
		screenTemplate({
			contents:[new infoScreen({})], 
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
	skin: skinTemplate, top:45, bottom:55, left:0, right:0, 
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
										new titleLabelTemplate({titleName: $.titleName})
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
								new Label({style:bodyNumberStyle, string: $.minuteWait}),
								new Label({style:bodyStyle, bottom:10, string:"min wait"}),
							]
						}),
						// Minutes to reach block
						new Column({skin:bottomBorderSkin, width:100, top:10, 
							contents:[
								new Label({style:bodyNumberStyle, string: $.minuteWalk}),
								new Label({style:bodyStyle, bottom:10, string:"mins to reach"}),
							]
						}),
						// Comment block
						new Column({top:25, left:0, right:0, 
							contents:[
								new Label({style:boldBodyStyle, bottom:10, string:"What people are saying"}),
								new commentContainer({userName:"John Doe", timePosted: "Today at 2pm", commentBody:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),
								new commentContainer({userName:"Jane Doe", timePosted: "Today at 1pm", commentBody:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),
							]
						})
						
					]
				})
			], 
			name:'queueProfileScreen',
		})] 
}));

// END SCREENS
