var myHTMLString = '<img src="hello.jpg">'

var aboutHTML = "HTML doesn't know about single quotes."

var HTMLwithApo = '<p class="big">Sometimes you\'ll need to use both.</p>'


function parseURLIntoObject (url) {
	var retObj = {};
	data = url.split("&")
	["?user_name=Icyfenix", "user_email=liz%40lizthedeveloper.com", "user_phone=123", "user_password=321"]
	for (var i = 0; i < data.length; i++) {
		keyVal = data[i].split("="); // ["?user_name", "Icyfenix"]
		//our array has a length of 2.
		if (i == 0) {
			keyVal[0] = keyVal[0].replace("?", "");
		}
		retObj[keyVal[0]] = decodeURI(keyVal[1]);
	};

	return retObj;
}
