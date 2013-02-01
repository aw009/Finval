//utils.js

function parseURLIntoObject (url) {
				var retObj = {};
				data = url.split("&")
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
			
			//['?project_id=9']
			//keyVal=['?project_id', '9']
			//keyVal[0]=['project_id', '9']
			//{}
			//retObj{'project_id': '9'}
			//project_id=9
			