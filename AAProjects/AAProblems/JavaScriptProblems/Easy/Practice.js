function sevenBoom(arr) {

    if (arr.includes(7)) {
        return "!Bomm"
    }
    for (var i = 0; i < arr.length; i++) {

        let NewArr = arr[i];
        NewArr.toString()
        Object.assign([], NewArr)

        console.log(NewArr)

    }
    return "there is no 7 in the array"
}

let Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let Array3 = [1, 2, 3, 4, 5, 6, 8, 9, 10];
let Array4 = [11, 12, 13, 14, 15, 16, 18, 19, 20];

console.log(sevenBoom(Array2));

