function Createcard(p1, p2, t){
	if (this instanceof Createcard){
		this.type = t;
		this.part1 = p1;
		this.part2 = p2;
	} else {
		return new Createcard(p1, p2, t);
	}
}



module.exports = Createcard;
