var project = {
	id : 4,
	name : "Harley Earnout",
	company_name : "Harley",
	dates : [
		{
			date: new Date("11/12/13"),
			id: 4
		},
		{
			date: new Date("9/23/14"),
			id: 6
		}
	],
	agreements : [{name : "my agreement", value: "20m", date: ""}]
};

var project2 = {
	id : 6,
	name : "Barley Earnout",
	company_name : "Harley",
	dates : [
		{
			date: new Date("11/12/14"),
			id: 89
		},
		{
			date: new Date("9/23/17"),
			id: 15
		}
	],
	agreements : [{name : "my agreement", value: "20m", date: ""}]
};

var project3 = {
	id : 9,
	name : "Marley Earnout",
	company_name : "Harley",
	dates : [
		{
			date: new Date("12/23/13"),
			id: 8
		},
		{
			date: new Date("2/5/17"),
			id: 14
		}
	],
	agreements : [{name : "my agreement", value: "20m", date: ""}]
};




///ADD YOUR PROJECT TO THIS ARRAY!
var projects = [project, project2, project3];
// var Project = function () {

// };

// var EarnoutProject = function(title, dates, agreements) {
// 	this.type = "Earnout";
// 	this.agreements = [];
// 	for (var i=0; i < agreements.length; i++) {
// 		if (agreements[i].type == 'Revenue Earnout') {
// 			this.agreements.push(new RevenueEarnoutAgreement(agreements[i].name));
// 		}
		

// 	}
// };

// EarnoutProject.prototype = new Project();

// RevenueEarnoutProject = function (arrRevenue) {
	
// 	this.revenue = arrRevenue;
// };

// //RevenueEarnoutProject.prototype = new EarnoutProject();


// RevenueEarnoutProject.prototype.getBlackSholes = function(interest, vol, time, range) {
// 	//range = [6, 7, 8, 9]
// 	if (typeof interest == 'array') {
// 		//you have to iterate over the interest array
// 	} else if (typeof interest == 'number') {
// 		//you don't have to iterate.

// 	}
// 	for (var i=0; i < range.length; i++) {
// 		this.BSArray.push(blackSholes(interest, vol, time, this.revenue));
// 	}
// };





// //var harley = new EarnoutProject();




// function blackSholes (interest, vol, time, revenue) {
// 	return interest * vol / time;
// }

/// User _ Project _ Roles

var User_Project_Roles = [
	{
		project_id : 4,
		user_id: 2,
		role : "Review"
	},
	{
		project_id : 6,
		user_id: 2,
		role : "View"
	},
	{
		project_id : 9,
		user_id: 2,
		role : "Own"
	},
	{
		project_id : 9,
		user_id: 3,
		role : "Review"
	}
];


function getRoleForUserOnProject(user, project, arrUPR) {
	for (var i = arrUPR.length - 1; i >= 0; i--) {
		if (arrUPR[i].project_id == project){
			//found the project...
			if (arrUPR[i].user_id == user) {
				//found the project and the user
				return arrUPR[i].role;
			}
		}
			
	}
}

