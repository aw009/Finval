types = {
name:"derivitive type",
subtypes: [
			{name:"stock",
			 subtypes: [
			 			{name: "Common Stock", subtypes[]},
			 			{name: "Preferred Stock", subtypes[]}
			 			]
			},
			{name:"bond",
			properties: [
							["callable", "none", "putable"],
			 				{convertable : false},
			 				{coupon: 0, fixed: true},
			 				["Finite", "Infinite"]
			 			]
			},
			{name:"option",
			properties: []
			},
			{name:"swap",
			subtypes: [{name: "Interest Rate", subtypes: ["Fixed to Fixed", "Fixed to Floating", "Floating to Floating"]},{name: "Currency", subtypes: ["Fixed to Fixed", "Fixed to Floating", "Floating to Floating"]},{name: "Commodity", subtypes: ["Fixed to Fixed", "Fixed to Floating", "Floating to Floating"]}]
			}

		]
};

var options = getOptions('bond', types.subtypes);

function getOptions(name, a) {
	for (var i =0;i<a.length;i++) {
		if (a[i].name == name) {
			if (a[i].subtypes) {
				a[i].subtypes.type = 'subtypes';
				return a[i].subtypes;
			} else {
				a[i].properties.type = 'properties';
				return a[i].properties;
			}
		}
	}
}

function showOptions(options) {
	//options is an array
	for (var i = 0; i<options.length;i++) {
		if (options.type == 'properties') {
			//create Radio Buttons, and other things
		} else {
			//Create a dropdown
		}
	}
}

