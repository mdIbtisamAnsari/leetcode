/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let r = []
    for (i of nums1){
        if(nums2.includes(i)){
            r.push(i)
            nums2 = nums2.filter(nums=> nums!==i)
        }
    }
    return r
};