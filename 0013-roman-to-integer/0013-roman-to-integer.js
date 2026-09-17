/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0
    let arr = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    
    for (let i = 0 ; i<[...s].length; i++){
        if (arr[[...s][i]]<arr[[...s][i+1]]) {
            num -= arr[[...s][i]]
        } else {num+= arr[[...s][i]]}
    }
    return num

};