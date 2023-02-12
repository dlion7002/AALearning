// the short one using bitwise operators

const bitwiseAND = (n1, n2) => n1 & n2;
const bitwiseOR = (n1, n2) => n1 | n2;
const bitwiseXOR = (n1, n2) => n1 ^ n2;


// my long vertion of the code
function binary(decimal) {
	return decimal.toString(2);
}

function inversebinary(binary) {
    return parseInt(binary, 2)
}

function bitwiseAND(n1, n2) {
	let binary1 = binary(n1);
    let binary2 = binary(n2);
    let result = "";
    
   while (binary1.length > binary2.length) {
       binary2 = "0" + binary2;
   }
   while (binary1.length < binary2.length) {
       binary1 = "0" + binary1;
   }
   for (let i = 0; i < binary1.length; i++) {
       if (binary1[i] === "1" && binary2[i] === "1") {
           result += "1"
       } else {
           result += "0";
       }
   }
   return inversebinary(result);
}

function bitwiseOR(n1, n2) {
	let binary1 = binary(n1);
    let binary2 = binary(n2);
    let result = "";
    
   while (binary1.length > binary2.length) {
       binary2 = "0" + binary2;
   }
   while (binary1.length < binary2.length) {
       binary1 = "0" + binary1;
   }
   for (let i = 0; i < binary1.length; i++) {
       if (binary1[i] === "1" || binary2[i] === "1") {
           result += "1"
       } else {
           result += "0";
       }
   }
   return inversebinary(result);

}

function bitwiseXOR(n1, n2) {
	let binary1 = binary(n1);
    let binary2 = binary(n2);
    let result = "";
    
   while (binary1.length > binary2.length) {
       binary2 = "0" + binary2;
   }
   while (binary1.length < binary2.length) {
       binary1 = "0" + binary1;
   }
   for (let i = 0; i < binary1.length; i++) {
       if (binary1[i] !==  binary2[i]) {
           result += "1"
       } else {
           result += "0";
       }
   }
   return inversebinary(result);

}


console.log(binary(7))
console.log(binary(12))
console.log(bitwiseAND(7, 12))
console.log(bitwiseOR(7, 12))
console.log(bitwiseXOR(7, 12))