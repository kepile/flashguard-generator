// var usersearch = require("./Usersearch.js");
var fs = require("fs");

function CardAdmin(){
	this.file = "card.log";
	this.newCard = function(card){
		var newCard = new createCard.createCard(card);
		//console.log(us);
		
		fs.appendFile(this.file, JSON.stringify(newCard) 
			+ "\n", function(error){
			if(error){ console.log("error appending to " + this.file)}
		});
	}
	this.getData = function(type){
		fs.readFile(this.file, "utf8", function(error, data){
			if(error){
				console.log("error reading file");
			}
			var dataArray = data.split("\n");
			// for(var i = 0; i < dataArray.length; i++){
			// 	if(dataArray[i].length > 0){
			// 		var dataObj = JSON.parse(dataArray[i]);
			// 		if(typeof user === 'undefined' || user === dataObj.name){
			// 			console.log(JSON.stringify(dataObj));
			// 		}
			// 	}
			// }
			//console.log(data);
		});
	}
} 
module.exports = CardAdmin;

//exports.WeatherAdmin;
//module.exports = WeatherAdmin;
