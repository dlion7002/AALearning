/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    var ans = 0
    
    var I = 1;
    var V = 5;
    var X = 10;
    var L = 50;
    var C = 100;
    var D = 500;
    var M = 1000;
    
    for (var i = 0; i < s.length; i++) {
        if (eval(s[i]) < eval(s[i + 1])) {
            ans -= eval(s[i]);
        } else {
            ans += eval(s[i]);
        }
        
    }
    return ans
    
};

console.log(romanToInt("XIII"))