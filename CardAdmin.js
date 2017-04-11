// var usersearch = require("./Usersearch.js");
var fs = require("fs");
var Cloze = require("./clozecard.js");
var CreateCard = require("./createCard.js");
var AddCard = require("./createCard.js");


var playgame = require("./playgame.js");


 
function CardAdmin(file){
	this.file = file;
	

	this.writeCard = function(card){
	    
	    var newCard = AddCard(card.part1, card.part2, card.cartType);
		
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
				console.log("\n *******Error reading file.  Please enter questions before you play.");
			    return;
		    }
			var dataArray = data.split("\n");
			console.log(dataArray.length + "arr lgth line 41");
			if(dataArray.length > 0) {		
			   playgame(dataArray);
			
			} else
			{
				console.log("\n**********Please enter a list of questions before choosing to play game.")
				return;
			};
						
		});
	};
}




// var inquirer = require('inquirer');


// function playgame(questions){
	
// 	console.log(questions.length + "arr lgth line 67 playgame");
	
//     if (q < questions.length){
//     	// console.log("q =" + q + " " + questions[q].length);
// 	   	// if (questions[q].length > 0){	 
// 	   	// var quest = JSON.parse(questions[q]);
// 	   	// console.log(quest, null, 2);
//     	// console.log("inside loop " + quest[q] + quest[q].length);
// 	   	// if (quest.length > 0 && quest.type != undefined){	
// 		    // var newquest = AddCard(quest.part1, quest.part2, quest.type);
	 	   
// 	  		inquirer.prompt([
// 				 {	
// 			        name: "front",
// 				    // type: "input",
// 				    // message: newquest.part1
// 					message: "This is the question"
// 				}
// 			]).then(function(answer) {
// 				console.log(q);

// 				// console.log(newquest.type + " line 92 display");
// 				// 	if (answer.trim().toLowerCase() === newquest.part2.toLowerCase()){
// 				// 		console.log("THAT IS CORRECT!");
// 				// 	} else
// 				// 	{
// 				// 		console.log("That is incorrect.")
// 				// 	}
// 					q++
// 			      playgame();
// 		      });
// 		     // }; 
		
// 	}
// 	console.log("GAME OVER.   Enter any key to continue");
// 	return;
// }


module.exports = CardAdmin;

