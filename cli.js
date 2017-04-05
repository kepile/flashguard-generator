var inquirer = require('inquirer');
var CardAdmin = require("./CardAdmin.js");

var MyAdmin = new CardAdmin();
function inputStart(){
	console.log("\n");
	inquirer.prompt([
	      {
	        name: "action",
	        type: "list",
	        message: "What would you like to do?",
	        choices: ['Create Cards', 'Test myself', 'exit']
	      }
	    ]).then(function(answer) {
	    	console.log(answer.action);
	      
	     switch(answer.action) {
		    
		    case 'Create Cards':
		        CardType();
		        break;
		    case 'Test myself':
		        testing();
		        break;
	        case 'Exit':
		        
		        break;
		    default:
		        console.log("An error has occurred.  Try again.");
		        inputStart();
		}

	});
}


function CardType(){
	console.log("\n _____________________________________________________________________________________");
	      	inquirer.prompt([
	      		 {
	         		name: "cardType",
			        type: "list",
			        message: "How would you like to format the question?  \n    A Basic card has a question like 'What color is the sky?' \n      A Cloze card has '.... is the color of the sky.", 
			        choices: ['Basic', 'Cloze', 'Both Basic and Cloze', 'Previous menu', 'Exit']
			    }
			]).then(function(answer) {
			      console.log(answer);
			    switch(answer.cardType) {
				    case 'Basic':
				        inputCard(answer.action);
				        break;
				     case 'Cloze':
				        inputCard(answer.action, question);
				        break;
					 case 'Both Basic and Cloze':
					     inputBoth('Both')
			         case 'Previous menu':
				        inputStart();
				        break;
				    case 'Exit':
				       
				        break;
				    default:
				        console.log("\n An error has occurred.  Try again. \n");
				        inputCardType();
				}
			})
	        
	       
}

function inputCard(cardType, question){
	console.log('\n Card Entry \n');
	inquirer.prompt([
		{	
			name: "front",
		    type: "input",
		    message: "What should the front say? Please phrase it according to the type of card you selected. \n",
		},
		{   
			name: "back",
		    type: "input",
		    message: "Please enter the anwer:",
		},
		{
		    name: "action",
	        type: "rawlist",
	        message: "Would you like to ",
	        choices: ['Save', 'Re-enter', 'Save then quit', 'Quit without Saving'] 

		}
	]).then(function(answer) {
			 switch(answer.action) {
			 	case '1':
				    if (front === "" || back === ""){
					    console.log('You must enter something for both the front and back of the card.');
					    inputCard(); 
				    } else
				    {
						var card = {
								cardType: cardType,
								front: answer.front,
								back: answer.back
							};
						MyAdmin.newCard(card);
					}
				    
				        break;
		        case '2':
			        inputCard();
			        break;
			    case '3':
				    if (front === "" || back === ""){
					    console.log('You must enter something for both the front and back of the card.');
					    inputCard(); 
				    }

			        break;
			    case '4':
				    break;

			    default:
			        console.log("\n An error has occurred.  Try again. \n");
			        inputCardType();	
			        break;	
			   }
		

			});
	        
}


function inputBoth(card, question){
	console.log('\n Card Entry \n');
	inquirer.prompt([
		{	
			name: "clozefront",
		    type: "input",
		    message: "What should the front of the cloze card say? Please phrase it 'is the color of the sky'. \n",
		},
				{	
			name: "basicfront",
		    type: "input",
		    message: "What should the front of the basic card say? Please phrase it 'What is the color of the sky?'. \n",
		},
		{   
			name: "back",
		    type: "input",
		    message: "Please enter the answer:",
		},
		{
		    name: "action",
	        type: "rawlist",
	        message: "Would you like to ",
	        choices: ['Save', 'Re-enter', 'Save then quit', 'Quit without Saving'] 

		}
	]).then(function(answer) {
			 switch(answer.action) {
			 	case '1':
				    if (clozefront === "" || basicfront ==="" || back === ""){
					    console.log('You must enter something for both the front and back of the card.');
					    inputBoth(); 
				    } else
				    {
						var card = {
								cardType: both,
								front: answer.clozefront,
								front2: answer.basicfront,
								back: answer.back
							};

						MyAdmin.newCard(card);
				    }
				        break;
				    
		        case '2':
			        inputBoth();
			        break;
			    case '3':
				    if (clozefront === "" || basicfront ==="" || back === ""){
					    console.log('You must enter something for both the front and back of the card.');
					    inputCard(); 
				    } else
				    {
						var card = {
								cardType: both,
								front: answer.clozefront,
								front2: answer.basicfront,
								back: answer.back
							};

						MyAdmin.newCard(card);
				    }

			        break;
			    case '4':
				    break;

			    default:
			        console.log("\n An error has occurred.  Try again. \n");
			        inputCardType();	
			    }	

			});
	        
}
// function inputCard()





inputStart();