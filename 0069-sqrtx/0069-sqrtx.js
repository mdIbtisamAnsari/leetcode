/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // newton raphson (one of the advantages of being a Er.)
    let guess = x/2
    if (x===0) return 0
    while (Math.abs(guess * guess -x) > 0.1){
        guess = (guess + x/guess)/2
    }
    return Math.floor(guess)
};