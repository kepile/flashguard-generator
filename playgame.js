var inquirer = require('inquirer');
var AddCard = require("./createCard.js");
var q= 0;

function playgame(questions){
	
	console.log(questions.length + "arr lgth line 67 playgame");
	
    if (q < questions.length){
    	console.log("q =" + q + " " + questions[q].length);
	   	// if (questions[q].length > 0){	 
	// console.log("questions[q].length > 0 line 11");
		   	// var quest = JSON.parse(questions[q]);
		   	// console.log(quest, null, 2);
	    	// console.log("inside loop " + quest[q] + quest[q].length);
		   	// if (quest.type != undefined){	
				// console.log("quest.typ defined line 16");
			    // var newquest = AddCard(quest.part1, quest.part2, quest.type);
		 	   
		  // 		inquirer.prompt([
				// 	 {	
				//         name: "front",
				// 	    type: "input",
				// 	    // message: newquest.part1
				// 		message: "This is the question"
				// 	}
				// ]).then(function(answer) {
				// 	console.log(q + answer.front);
				// 		// var ans = answer;
					// console.log(newquest.type + " line 92 display");
						// if (answer.toLowerCase() === newquest.part2.toLowerCase()){
						// 	console.log("THAT IS CORRECT!");
						// } else
						// {
						// 	console.log("That is incorrect.");
						// };
					q++;
			      playgame();
		      // });
		     // };
		// }      
		
	} else
	{
	console.log("GAME OVER.   Enter any key to continue");

	}
}




module.exports = playgame;
