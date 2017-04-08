function Createcard(p1, p2, t){
	if (this instanceof Createcard){
		this.type = t;
		this.part1 = p1;
		this.part2 = p2;
	} else {
		return new Createcard(p1, p2, t);
	}
}


function Cloze(p1, p2, t){
	console.log("inside Cloze creating prototype ")
    Createcard.call(this, p1, p2, t);
}



Cloze.prototype.ReturnDel = function(){
	    	return this.part2;
	    };

Cloze.prototype.ReturnPart = function (){
			var l = this.part2.length;
			var sub = "";
			for (var i = 1; i<= l; i++){
				sub += "_";
			}

			return this.part1.replace(" " + this.part2 + " ", sub);
		}

Cloze.prototype.ReturnFull = function (){
			return this.part1;
		}
	



module.exports = Createcard;
module.exports = Cloze;
