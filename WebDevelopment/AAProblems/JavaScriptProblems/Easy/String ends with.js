function solution(str, ending){
    console.log(str[-1]);
    if (str[-ending.length] === ending) return true; else {return false};
}

console.log(solution('abcde', 'cde'))       