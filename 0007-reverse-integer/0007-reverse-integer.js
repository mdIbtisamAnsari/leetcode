/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let mul = 1

    while(Math.abs(x/mul) >= 10){
        mul *= 10
    }
    let ans = 0

    function getI(){
    let i = x%10
    x = Math.trunc(x/10)
    return i
    }

    while (x !== 0) {
        let i = getI()
        ans += i * mul
        mul /= 10
    }

    
    

    if( ans < -2147483647 || ans >2147483647) {
        return 0
    }else{
        return ans
    }
};