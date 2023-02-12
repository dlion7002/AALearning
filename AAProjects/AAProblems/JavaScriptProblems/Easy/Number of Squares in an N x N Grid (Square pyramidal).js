// my vertion
function numberSquares(n) {
	result = 0;

    for (var i = 1; i <= n; i++) {
        result += i ** 2;
    }

    return result;
}

console.log(numberSquares(5))
// short version

const numberSquaresShort = n => n > 1? n**2 + numberSquaresShort(n - 1) : 1;

console.log(numberSquaresShort(5))