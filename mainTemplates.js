// IMPORT scrollers
import {
    VerticalScroller,
    VerticalScrollbar,
    TopScrollerShadow,
    BottomScrollerShadow
} from 'scroller';

export let skinTemplate = new Skin({fill: 'white'}); // fill in!

let placeHolderStyle = new Style({ font: "20px", color: "black" }), 
let headerStyle = new Style({ font: "34px", color: "black" }), 

// START LIST TEMPLATES

//Different text labels for each queue within a list
export let listEntryTitleTemplate = Label.template($ => ({string: $.queueName, style:placeHolderStyle}));
export let listEntryLocationTemplate = Label.template($ => ({string: $.queueLocation, style:placeHolderStyle}));
export let listEntryWaitTimeTemplate = Label.template($ => ({string: $.waitTimeMinutes, style:placeHolderStyle}));
export let listEntryMinuteWaitTemplate = Label.template($ => ({string: "min wait", style:placeHolderStyle}));

//label at the top of each queue page
export let tabHeaderLabelTemplate = Label.template($ => ({
	string: $.tabName,
	skin: skinTemplate,
	style: headerStyle
}));

//container for a list entry
export let listEntryContainer = Container.template($ => ({
	skin: skinTemplate,
	top: 0, left: 0, right: 0, bottom: 0,
	contents: [
		new listEntryTitleTemplate({queueName: "Jankos"}),
		new listEntryLocationTemplate({queueLocation: "Area 3"}),
		new listEntryWaitTimeTemplate({waitTimeMinutes: "20"}),
		new listEntryMinuteWaitTemplate({}),
	]
}));

// programatically create containers for each of the list items in data object
// object: JSON data from hardware
var createContentArray = function(object) {
	var contents = [];
	for (var i = 0; i < 3; i++) {
		trace("lets get it\n");
		contents.push(new listEntryContainer({}));
	}
	return contents;
};

export let listColumnTemplate = Column.template($ => ({
	skin: skinTemplate,
	content: createContentArray($)
}));

// lets make this shit scroll
export let listScrollerTemplate = Scroller.template($ => ({
	active: true, top:0, left: 0, right: 0,
	contents: [new listColumnTemplate({})]
}));


// END LIST TEMPLATES

// START SCREENS (triggered by hitting nav buttons)

// This will hold all the other screens
export let screenTemplate = Column.template($ => ({
	name: $.name, top: 0, bottom: 55, left: 0, right: 0, // bottom 55 is for navbar room
	contents: $.contents, skin: skinTemplate
}));



// export let favoritesScreen = Label.template($ => ({string:'Replace with Favorites list',style:placeHolderStyle}));
export let favoritesScreenContainer = Container.template($ => ({
	left:0, right: 0, top: 0, bottom: 55,
	skin: skinTemplate,
	contents: [
		screenTemplate({
			contents:[
			new tabHeaderLabelTemplate({tabName: "Favorites"}),
			new listScrollerTemplate({a:"", b:"", c:""})
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
