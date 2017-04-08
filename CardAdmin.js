// var usersearch = require("./Usersearch.js");
var fs = require("fs");
var Cloze = require("./createCard.js");
var CreateCard = require("./createCard.js");

 
function CardAdmin(file){
	this.file = file;
	console.log("creating prototype");
	Cloze.prototype = new CreateCard();
	console.log("BACK FROM creating prototype");
	

	this.newCard = function(card){
		console.log("calling newCard" );
		console.log("card is " + card.cardType);
		if (card.cardType === "Cloze") {
		    var newCard = new Cloze(card.part1, card.part2, card.cardType);
		    console.log( "Cloze deleted portion is " + Cloze.prototype.ReturnDel());
		    console.log( "Cloze partial sentence is " +Cloze.prototype.ReturnPart());
		    console.log( "Cloze partial sentence is " + Cloze.prototype.ReturnFull());

	} else
	{
		var newCard = new CreateCard(card.part1, card.part2, card.cardType);
		    console.log("new basic being created");
	}
		console.log("New Card "+ newCard.type + newCard.part1 + newCard.part2 );
		var valid = true;

		if (newCard.type === "Cloze" && newCard.part1.indexOf(newCard.part2) < 0){
			console.log("\n ***ERROR*** The phrase " + newCard.part2 + " does not appear in the sentence " + newCard.part1);
			console.log("\n             The phrase " + newCard.part2 + " must be part of first entry for a Cloze Card");

			valid = false;

		}

        if (valid) {
			fs.appendFile(this.file, JSON.stringify(newCard) 
				+ "\n", function(error){
				if(error){ console.log("error appending to " + this.file)}
			});
		}
	}
	this.getData = function(){
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
			// 	}
			// }
			//console.log(data);
		});
	}
} 


module.exports = CardAdmin;

//exports.WeatherAdmin;
//module.exports = WeatherAdmin;
