/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = []
    let str = []
    const something = (closeC , openC)=>{
        if(openC === n &&closeC === n){
            ans.push(str.join(''))
            return
        }
        if(openC<n){
            str.push('(')
            something(closeC , openC +1)
            str.pop()
        }
        if(closeC<openC){
            str.push(')')
            something(closeC + 1, openC)
            str.pop()
        }
    }
    something(0,0)
    return ans
};