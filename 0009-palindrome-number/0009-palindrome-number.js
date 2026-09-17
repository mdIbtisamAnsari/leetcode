/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a = String(x)
    return a.split('').reverse().join('') === a
};