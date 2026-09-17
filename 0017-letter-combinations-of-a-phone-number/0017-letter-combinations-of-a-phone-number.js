/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let dic = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    let ans = dic[digits[0]]
  



    function something(a, b ,c) {
        let z = []
        for (let i = 0; i < c; i++) {
            
       
            for (let j = 0; j < b.length; j++) {
                z.push(a[i] + b[j])
            }
        }
        
        return z
    }

    for(let l = 1 ; l<digits.length ; l++){
        ans = something(ans , dic[digits[l]] , ans.length)

    }
    return ans
};

