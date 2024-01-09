function makeid(l) {
  // write your code here
		var Charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz0123456789"
		let randomString = "";
		for(let i=0;i<l;i++){
			var rnum = Math.floor(Math.random()*Charecters.length);
			randomString += Charecters.substring(rnum, rnum+1);
		}
	return randomString;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
