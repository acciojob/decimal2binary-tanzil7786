function decToBin(num) {
// write your code here
 let res="";
	while(num>0){
		let rem=num%2;
		res=res+rem.toString();
		num = Math.floor(num/2)
	}
	    return res.split("").reverse().join("")
}

module.exports = decToBin;
