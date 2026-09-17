/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0
    if(m === 0){
        nums1.splice(0,nums2.length,...nums2)
        
        return
    }
    if(n === 0){
        return
    }
    nums1.splice( m, nums1.length - 1)
    while( i <= m + n ){
        if(nums2[0] < nums1[i]){
            j = nums2.shift()
            nums1.splice(i,0,j) 
            
            i++
        }
        else{
            i++
        }
        
    }
    if(nums2){
        nums1.splice(i,0,...nums2)
    }

return
};