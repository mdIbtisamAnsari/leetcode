/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if (numRows === 1 ) return s
    let ans = ''
    let col = 0
    let odd = true

    let map = {}

    for ( let i = 0 ; i < numRows ; i++ ){
        map[i] = ''
    }

    let i = 0
    

    while(col < s.length){
        map[i] += s[col]
        col++
        i = getI(i , numRows)
    }

    function getI (i , numRows){
        
        if(odd === true){
            i++
            if(i === numRows -1) odd = false
            return i 

        }
        else{
            i--
            if(i === 0) odd = true
            return i
           
        }
        
    }
    
    for( let i = 0; i<numRows ; i++){
        ans += map[i]
    }


    return ans
};