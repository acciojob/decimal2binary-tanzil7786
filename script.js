function decimalToBinary(dec){
	let binary='';
	while(dec>0){
		let rem=dec%2;
		binary=rem+binary;
		dec=Math.floor(dec/2);
	}
	return binary;
}
module.exports = decimalToBinary;