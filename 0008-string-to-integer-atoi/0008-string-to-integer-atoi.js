/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {

    let a = s.trim()
    if(a[0]==='+' && a[1]==='-') return 0
    if(a[0]==='-' && a[1]==='+') return 0
    let neg = false
    ans = ''

    for (let i = 0; i < a.length; i++) {
       
        if (i == 0 &&( a[i] === '-' || a[i] === '+')) {
            if(a[0] === '-'){
            neg = true;
            }else{
                continue
            }
        } else {
            console.log(a[i])
            if (Number(a[i]) +1 && a[i] !== ' ') {
   
                ans += a[i]
            }
            else {
                break
            }
        }
    }
    let rtn = Number(ans)

    if (neg === true) {
        rtn = rtn * -1
    }
    if (rtn < -2147483648) return -2147483648

    if (rtn > 2147483647) return 2147483647



    return rtn

};