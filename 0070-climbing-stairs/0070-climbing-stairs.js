/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if ( n == 1 ) return 1;
    if ( n == 2 ) return 2;
    let x = 1;
    let y = 2;
    for (let i = 3; i<=n ; i++){
        y = y + x;
        x = y -x
    }
    return y
};