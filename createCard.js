function Createcard(p1, p2, t){
	temp = this instanceof Createcard;
	console.log("create card " + t + p1 + " instance of " + temp )
	if (this instanceof Createcard){
		this.type = t;
		this.part1 = p1;
		this.part2 = p2;
		console.log("create card this" + this.type)
		// console.log("cloze line 10 " + this instanceof Cloze);
		// console.log("cloze line 10 " + this instanceof Createcard);
	} else {
		return new Createcard(p1, p2, t);
	}
	this.DispQuest = function(){
		
		console.log("reached DispQuest card");
	}
}



module.exports = Createcard;
