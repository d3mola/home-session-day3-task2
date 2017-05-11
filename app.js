

'use strict';


class StringSplotion {

	constructor(str) {
		this.str = str;
	}

	manipulate(str) {
		let arr = [];
		for (let i = 0; i < str.length+1; i++) {
			let newString = str.substr(0, i);
			arr.push(newString);
		}
		return arr.join('');

	}
}


let stringSplotion = new StringSplotion();