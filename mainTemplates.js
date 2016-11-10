// IMPORT scrollers
import {
    VerticalScroller,
    VerticalScrollbar,
    TopScrollerShadow,
    BottomScrollerShadow
} from 'scroller/scroller';


export let skinTemplate = new Skin({fill: 'white'}); // fill in!
let blueSkin = new Skin({fill: 'gray'});

let placeHolderStyle = new Style({ font: "30px", color: "black" }), 
let headerStyle = new Style({ font: "34px", color: "black" }), 
let whiteTextStyle = new Style({ font: "34px", color: "white" }), 


// START LIST TEMPLATES

let blackTextStyle = new Style({ font: "18px", color: "black" }), 


//Different text labels for each queue entry within a list
let listEntryTitleTemplate = Label.template($ => ({
	left: 15, top: 0, bottom: 0, height: 24, string: $.queueName, style: new Style({ font: "24px", color: "black" }), skin: skinTemplate
}));
let listEntryLocationTemplate = Label.template($ => ({left: 15, top: 0, bottom: 0, height: 24, string: $.queueLocation, style:blackTextStyle, skin: skinTemplate}));
let listEntryWaitTimeTemplate = Label.template($ => ({right: 15, top: 0, bottom: 0, height: 24, string: $.waitTimeMinutes, style:blackTextStyle, skin: skinTemplate}));
let listEntryMinuteWaitTemplate = Label.template($ => ({right: 15, top: 0, bottom: 0, height: 24, string: "min wait", style:blackTextStyle, skin: skinTemplate}));


//label at the top of each queue page
export let tabHeaderLabelTemplate = Label.template($ => ({
	string: $.tabName,
	skin: skinTemplate,
	style: headerStyle
}));

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
	left: 0, right: 0, top: 0,
	contents: $
}));

//container for a list entry
let listEntryContainer = Container.template($ => ({
	skin: skinTemplate,
	top: 0, left: 0, right: 0, height: 75,
	skin: skinTemplate,
	contents: [
		// new listEntryTitleTemplate({queueName: "Jankos"}),
		// new listEntryLocationTemplate({queueLocation: "Area 3"}),
		// new listEntryWaitTimeTemplate({waitTimeMinutes: "20"}),
		// new listEntryMinuteWaitTemplate({}),
		Line($, {left: 0, right: 0,
					contents: [
						new listEntryColumnTemplate([new listEntryTitleTemplate({queueName: "Burrito Tent"}), new listEntryLocationTemplate({queueLocation: "Area 2"})]),
						new listEntryColumnTemplate([new listEntryWaitTimeTemplate({waitTimeMinutes: "20"}), new listEntryMinuteWaitTemplate({})]),

					]
				})
	]
}));

// programatically create containers for each of the list items in data object
// object: JSON data from hardware
var createContentArray = function(object) {
	var contents = [];
	for (var i = 0; i < 4; i++) {
		trace("lets get it\n");
		contents.push(new listEntryContainer({}));
	}
	return contents;
};
//column for the two rows of labels (i.e. row 1 = title, row 2 = location) for each list entry
let listColumnTemplate = Column.template($ => ({
	top: 0, bottom: 0, left: 0, right: 0, clip: false,
    skin: new Skin({fill: "#202020"}),
    contents: createContentArray({})

}));

// lets make this shit scroll
let listScrollerTemplate = VerticalScroller.template($ => ({
	active: true, top:0, bottom: 0, skin: new Skin({fill: 'gray'}),
	// contents: [new listColumnTemplate({})]
	contents: [
		new listColumnTemplate({})
	]
}));


// END LIST TEMPLATES

// START SCREENS (triggered by hitting nav buttons)

// This will hold all the other screens
export let screenTemplate = Column.template($ => ({
	name: $.name, top: 45, bottom: 55, left: 0, right: 0, // bottom 55 is for navbar room
	contents: $.contents,
	skin: skinTemplate
}));



// export let favoritesScreen = Label.template($ => ({string:'Replace with Favorites list',style:placeHolderStyle}));
export let favoritesScreenContainer = Container.template($ => ({
	left:0, right: 0, top: 0, bottom: 55,
	// skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
				listScrollerTemplate({}, {})
			], 
			name:'foodScreen',
		})] 
}));

export let restroomScreen = Label.template($ => ({string:'Replace with restroom list',style:placeHolderStyle}));
export let restroomScreenContainer = Container.template($ => ({
	left:0, right: 0, top: 0, bottom: 55,
	skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
			new tabHeaderLabelTemplate({tabName: "Restrooms"})
			], 
			name:'foodScreen',
		})] 
}));


export let merchScreen = Label.template($ => ({string:'Replace with Merchandise list',style:placeHolderStyle}));
export let merchScreenContainer = Container.template($ => ({
	left:0, right: 0, top: 0, bottom: 55,
	skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
			new tabHeaderLabelTemplate({tabName: "Merchandise"})
			], 
			name:'foodScreen',
		})] 
}));

let infoScreen = Label.template($ => ({string:'Replace with Info list', style:placeHolderStyle}));
export let infoScreenContainer = Container.template($ => ({
	left:0, right: 0, top: 0, bottom: 55,
	skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
			new tabHeaderLabelTemplate({tabName: "Information"})
			], 
			name:'foodScreen',
		})] 
}));

export let foodScreen = Label.template($ => ({string:'Replace with Foods list', style:placeHolderStyle}));
// Foodscreen instantiated in main.js

// END SCREENS
