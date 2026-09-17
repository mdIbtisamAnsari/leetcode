/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let max = 0
    let left = 0
    for ( let i = 0 ; i < s.length ; i++){
        let current = s[i]
        if(map.has(current) && map.get(current) >= left){
            left = map.get(current)+1
            
        }
        max = Math.max(max , i - left +1)
        map.set( current , i )
    }
    if(max === 0) max = s.length
    return max
};