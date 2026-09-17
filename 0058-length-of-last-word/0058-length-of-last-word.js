/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const b = s.trim().split(" ")
    const c = b[b.length-1]
    const d = c.split('')
    return d.length
};