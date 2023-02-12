function num_of_digits(num) {
	num = Math.abs(num);
    let result = 1; 
    let mult = 10;

    while(num / mult >= 1) {
        result += 1;
        mult = mult * 10;
    }

    return result;
}

console.log(num_of_digits(1))
console.log(num_of_digits(13124))
console.log(num_of_digits(-12381428))


const num_of_digits = n => n ? ~~Math.log10(Math.abs(n)) + 1 : 1;