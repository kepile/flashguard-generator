var CreateCard = require("./createCard.js");




function Cloze(p1, p2, t){
	console.log("inside Cloze creating prototype ")
    CreateCard.call(this, p1, p2, t);
}



Cloze.prototype.ReturnDel = function(){
	    	return this.part2;
	    };

Cloze.prototype.DispCloze = function (){
	console.log("reached DispQuest cloze");
			// var l = this.part2.length;
			// var sub = "";
			// for (var i = 1; i<= l; i++){
			// 	sub += "_";
			// }

			// return this.part1.replace(" " + this.part2 + " ", sub);
		}

Cloze.prototype.ReturnFull = function (){
			return this.part1;
		}
	


module.exports = Cloze;
