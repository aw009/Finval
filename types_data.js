types = {
name:"derivitive_types",
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
			 				["Finite", "Perpetual"]
			 			]
			},
			{name:"option",
			properties: [
							["call", "put"],
							["European", "American", "Asian"]
						]
			},
			{name:"swap",
			subtypes: [
				{name: "Interest Rate", 
				subtypes: ["Fixed to Fixed", "Fixed to Floating", "Floating to Floating"]
				},
				{name: "Currency", 
				subtypes: ["Fixed to Fixed", "Fixed to Floating", "Floating to Floating"]
				},
				{name: "Commodity", 
				subtypes: ["Fixed to Fixed", "Fixed to Floating", "Floating to Floating"]
				}
			]
			
			}

		]
};


		
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
var options = getOptions('derivitive_types', types);

var dropdown = $('<select>');
for (var i=0; i<options.length; i++){
	var option = $('<option>');
	option.html(options[i].name);
	dropdown.append(option);
}
$('#dropdown').append(dropdown);


