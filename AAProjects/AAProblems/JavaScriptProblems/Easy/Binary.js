function binary(decimal) {
	let result = "";
	if (decimal == 0) {
		result = "0";
	}
	while (decimal > 0) {
			result += decimal % 2;
			decimal = Math.floor(decimal/2);
		};
	return result.split("").reverse().join("");
}

console.log(binary(24))

//also

function binary1(decimal) {
	return decimal.toString(2);
}

console.log(binary1(5))


// attempt 3

