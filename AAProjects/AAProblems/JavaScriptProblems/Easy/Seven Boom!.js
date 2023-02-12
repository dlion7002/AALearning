const parameter = /7|7/;
const sevenBoom = arr => arr.toString().match(parameter) >= 1 ? "Boom!" : "there is no 7 in the array";


console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([1,2,3,4,5,6,8]));

