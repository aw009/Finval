var types = {
name:"derivitive_types",
subtypes: [
			{name: "Please Select"
			},
			{name:"stock",
			 subtypes: [
			 			{name: "Common Stock", subtypes:[]},
			 			{name: "Preferred Stock", subtypes:[]}
			 			]
			},
			{name:"bond",
			properties: [
							["callable", "none", "putable"],
			 				{convertable : false},
			 				{coupon: 0, fixed: true},
			 				["Maturity", "Perpetual"]
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
	if (!a.length){
		a = a.subtypes;	
		return a;
	}

	for (var i =0;i<a.length;i++) {
		if (a[i].name == name) {
			if (a[i].subtypes) {
				return a[i].subtypes;
			} else {
				return a[i].properties;
			}
		}
	}
}


function dropdown_maker(options, location_id, dropdown_id){
	var dropdown = $('<select>');
	dropdown.attr('id',dropdown_id);
	for (var i=0; i<options.length; i++){
		var option = $('<option>');
		option.html(options[i].name || options[i]);
		dropdown.append(option);
	}
	$('#'+location_id).append(dropdown);
}

