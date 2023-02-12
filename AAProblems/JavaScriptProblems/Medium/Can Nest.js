function canNest(arr1, arr2) {
    let verificationMax = 0;
    let verificationMin = 0;
    arr1.forEach(function (arr1) {
        for (var i = 0; i < arr2.length; i++) {
            if (arr2[i] < arr1) {
                verificationMin += 1;
            } 
            if (arr2[i] > arr1) {
                verificationMax += 1;
            }
        }
    })
    return verificationMin >= arr1.length && verificationMax >= arr1.length;
}



console.log(canNest([1, 2, 3, 4], [0, 6, 7]))    
console.log(canNest([3, 1], [4, 0]))
console.log(canNest([9, 9, 8], [8, 9, 10]))
console.log(canNest([9, 9, 8], [8, 9]))
console.log(canNest([1, 2, 3, 4], [2, 3]))