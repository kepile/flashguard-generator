var inquirer = require('inquirer');
var CardAdmin = require("./CardAdmin.js");
var file = "temp.log";

var myAdmin = new CardAdmin(file);



function inputStart(){
		console.log("\n");
		inquirer.prompt([
		      {
		        name: "action",
		        type: "list",
		        message: "What would you like to do?",
		        choices: ['Create Cards', 'Test myself', 'Exit']
		      }
		    ]).then(function(answer) {
		    	console.log(answer.action);
		      
		     switch(answer.action) {
			    
			    case 'Create Cards':
			        inputCard();
			        break;
			    case 'Test myself':
				    myAdmin.getData();
				   inputStart();
			        break;
		        case 'Exit':
			        // quit = true;
			        break;
			    default:
			        console.log("An error has occurred.  Try again.");
			        inputStart();
			}

		});
}




function inputCard(){

	console.log("\n _____________________________________________________________________________________");
  	inquirer.prompt([
  		 {
     		name: "cardType",
	        type: "list",
	        message: " \n How would you like to format the question?  \n    A Basic card has a question like 'What color is the sky?' \n      A Cloze card has '.... is the color of the sky.", 
	        choices: ['Basic', 'Cloze']
	    },
	    {	
	        name: "front",
		    type: "input",
		    message: "\n What should first part say? Please phrase it according to the type of card you selected. \n    The first part of the Basic card has a question like 'What color is the sky?' \n      For the Cloze card, please enter the entire sentence, eg. 'The color of the sky is blue.'",
		},
		{   
			name: "back",
		    type: "input",
		    message: "\n Please enter the answer: For the Basic card example, it would be 'blue'. \n      For the Cloze card, the answer is the part that will be removed, eg. for example it is 'blue'",
		},
		{
		    name: "action",
	        type: "rawlist",
	        message: "\n Would you like to ",
	        choices: ['Save', 'Re-enter', 'Save then exit to main menu', 'Quit without Saving'] 

		}
			]).then(function(answer) {
			      console.log(answer.cardType + "at cardtype line 53");
			    switch(answer.action) {
				 	case 'Save':
				 	   
				 	    callAdmin(answer.front.trim(), answer.back.trim(), answer.cardType.trim())
						inputStart();				
					    break;
			        case 'Re-enter':
				        inputCard();
				        break;
				    case 'Save then exit to main menu':
						
				 	    callAdmin(answer.front.trim(), answer.back.trim(), answer.cardType.trim())
				        break;
				    case 'Quit without Saving':
				        inputStart();
					    break;

				    default:
						console.log("\n An error has occurred.  Try again. \n");
				        inputStart();	
			        break;	
			   }
			});
	        
	       
};





function callAdmin(front, back, cardtype)
     { console.log(cardtype + "at line 105");
	 if (front === "" || back === ""){
	    console.log('You must enter something for both the front and back of the card.');
	    inputStart(); 
    } else
    {
		var card = {
				cardType: cardtype,
				part1: front,
				part2: back
			};
	 	console.log("card is " + card);

		myAdmin.writeCard(card);
	}
}



	// function displayquest(questions){
	//     // if (!questions) {
	//     var q = 0;
	//     if (q< questions.length){
	// 		if (questions[i].length >0 && questions[i].type != undefined){
	// 			inquirer.prompt([
	// 				 {	
	// 			        name: "front",
	// 				    type: "input",
	// 				    message: "\n" + questions[i].part1,
	// 				},
	// 			]).then(function(answer) {
	// 				console.log(questions.type + " line 136 display");
	// 				if (answer.trim().toLowerCase() === questions[i].part2.toLowerCase()){
	// 					console.log("THAT IS CORRECT!");
	// 				} else
	// 				{
	// 					console.log("That is incorrect.")
	// 				}
			      
	// 		      });
	// 		     }; 
	// 		q++;
	// 	}
	// 	consolelog("GAME OVER");
	// 	inputStart();
		
				    
	// }



inputStart();