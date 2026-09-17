/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {



    function isPal(s){
        let i = 0
        let j= s.length -1
        while(s[i] === s[j] && i<j){
            i++
            j--
        }
        if(i === j || i-1 === j){
            return s
        }else{
            return null
        }
    }
    let maxpal =0
    let maxstr = ''
    for ( let i = 0 ; i < s.length ; i++ ){
        let l = s[i];
        let x = i
        let y = i + 1
        
        let current = s.slice(x,y)
        while(s[y] === s[x]){
            y++
        }
        while(isPal(current) !== null && x>=0 && y<=s.length){
            let current = s.slice(x,y)
            let str = isPal(current)
            if(str?.length > maxpal){
                maxpal = str.length
                maxstr = str
            }
            x--
            y++
        }
    }

    return maxstr
    
};