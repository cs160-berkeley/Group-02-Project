// IMPORT scrollers
import {
    VerticalScroller,
    VerticalScrollbar,
    TopScrollerShadow,
    BottomScrollerShadow
} from 'scroller';

export let skinTemplate = new Skin({fill: 'white'}); // fill in!
let blueSkin = new Skin({fill: 'gray'});

let placeHolderStyle = new Style({ font: "30px", color: "black" }), 
let headerStyle = new Style({ font: "34px", color: "black" }), 
let whiteTextStyle = new Style({ font: "34px", color: "white" }), 


// START LIST TEMPLATES

//Different text labels for each queue entry within a list
export let listEntryTitleTemplate = Text.template($ => ({
	left: 0, right: 0, top: 0, bottom: 0, height: 24, string: $.queueName, style: new Style({ font: "34px", color: "black" }), skin: skinTemplate
}));
export let listEntryLocationTemplate = Text.template($ => ({left: 0, right: 0, top: 0, bottom: 0, height: 24, string: $.queueLocation, style:whiteTextStyle, skin: skinTemplate}));
export let listEntryWaitTimeTemplate = Text.template($ => ({left: 0, right: 0, top: 0, bottom: 0, height: 24, string: $.waitTimeMinutes, style:whiteTextStyle, skin: skinTemplate}));
export let listEntryMinuteWaitTemplate = Text.template($ => ({left: 0, right: 0, top: 0, bottom: 0, height: 24, string: "min wait", style:whiteTextStyle, skin: skinTemplate}));

//label at the top of each queue page
export let tabHeaderLabelTemplate = Label.template($ => ({
	string: $.tabName,
	skin: skinTemplate,
	style: headerStyle
}));

//line for two sides of entry info
export let listEntryLineTemplate = Line.template($ => ({
	left: 0, right: 0, height: 30,
	skin: blueSkin,
	content: [
		new listEntryTitleTemplate({queueName: "HELLLOOOO"}),
		new listEntryWaitTimeTemplate({waitTimeMinutes: "20"})
	]
}));

export let listEntryColumnTemplate = Column.template($ => ({
	left: 0, right: 0, top: 0,
	contents: [
		new listEntryTitleTemplate({queueName: "HELLLOOOO"}),
		new listEntryWaitTimeTemplate({waitTimeMinutes: "20"})
	]
}));

//container for a list entry
export let listEntryContainer = Container.template($ => ({
	// skin: skinTemplate,
	top: 0, left: 0, right: 0, height: 30, 
	contents: [
		// new listEntryTitleTemplate({queueName: "Jankos"}),
		// new listEntryLocationTemplate({queueLocation: "Area 3"}),
		// new listEntryWaitTimeTemplate({waitTimeMinutes: "20"}),
		// new listEntryMinuteWaitTemplate({}),
		new listEntryColumnTemplate({})
	]
}));

// programatically create containers for each of the list items in data object
// object: JSON data from hardware
var createContentArray = function(object) {
	var contents = [];
	for (var i = 0; i < 1; i++) {
		trace("lets get it\n");
		contents.push(new listEntryContainer({}));
	}
	return contents;
};
//column for the two rows of labels (i.e. row 1 = title, row 2 = location) for each list entry
export let listColumnTemplate = Column.template($ => ({
	top:0, bottom: 0, left: 0, right: 0,
	skin: skinTemplate,
	content: [
		new listEntryTitleTemplate({queueName: "HELLLOOOO"}),
		new listEntryWaitTimeTemplate({waitTimeMinutes: "20"})]
}));

// lets make this shit scroll
export let listScrollerTemplate = VerticalScroller.template($ => ({
	top:0, bottom: 0,
	// contents: [new listColumnTemplate({})]
	contents: [
		
	]
}));


// END LIST TEMPLATES

// START SCREENS (triggered by hitting nav buttons)

// This will hold all the other screens
export let screenTemplate = Column.template($ => ({
	name: $.name, top: 0, bottom: 55, left: 0, right: 0, // bottom 55 is for navbar room
	contents: $.contents
	// skin: skinTemplate
}));



// export let favoritesScreen = Label.template($ => ({string:'Replace with Favorites list',style:placeHolderStyle}));
export let favoritesScreenContainer = Container.template($ => ({
	left:0, right: 0, top: 0, bottom: 55,
	// skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
			new tabHeaderLabelTemplate({tabName: "Favorites"}),
			new listEntryLineTemplate({}),
			// new listScrollerTemplate({})
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
