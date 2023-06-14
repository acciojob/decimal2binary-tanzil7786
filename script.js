function decimalToBinary(dec){
	id(dec===0){
		return '0';
	}
	let binary='';
	while(dec>0){
		binary=(dec%2) + binary;
		dec=Math.floor(dec/2);
	}
	return binary;
}
module.exports = decimalToBinary;