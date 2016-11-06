// START SCREENS (triggered by hitting nav buttons)
let skinTemplate = new Skin({fill: 'white'}); // fill in!

let placeHolderStyle = new Style({ font: "20px", color: "black" }), 

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

// END SCREENS
