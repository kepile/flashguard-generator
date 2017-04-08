var ClozeCard =  function(card){
	this.type = card.cardType;
	this.part1 = card.part1;
	this.part2 = card.part2;
    this.ReturnDel = function (){
    	return this.part2;
	    }
	this.ReturnPart = function (){
		
		var l = this.part2.length;
		var sub = "";
		for (var i = 1; i<= l; i++){
			sub += "_";
		}

		 return this.part1.replace(" " + this.part2 + " ", sub);


	}
	this.ReturnFull = function (){
		return this.part1;
	}
}


module.exports = ClozeCard;
// Cloze.prototype.ReturnData = function () {
// 	console.log("prototype");
// }
