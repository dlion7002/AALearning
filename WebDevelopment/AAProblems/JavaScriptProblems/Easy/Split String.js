function solution(str) {
    if (str.length === 0) return [];
    
    var ans = "" 

    if (str.length % 2 !== 0) {
        str += "_"
    }

    for (var i = 0; i < str.length; i += 2) {
        ans += [str.substring(i, i + 2)]
        if (i < str.length - 2) {
            ans += " "
        }
    }

    return ans.split(" ");
}

console.log(solution(""));

