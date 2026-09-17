/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let obj = {
        1000 : 'M',
        900 : 'CM',
        500 : 'D',
        400 : 'CD',
        100 : 'C',
        90 : 'XC' ,
        50 : 'L',
        40 : 'XL',
        10 : 'X',
        9 : 'IX',
        5 : 'V',
        4 : 'IV',
        1 : 'I'
    }
    let sac = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let i = 0 
    let ans = ''

    while(num > 0){
        if(sac[i] <= num){
            num = num - sac[i]
            ans += obj[sac[i]]
        }else{
            i++
        }
    }
    return ans
};