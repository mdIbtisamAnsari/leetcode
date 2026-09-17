/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0
    while(nums.length>index &&  nums[index] < target){
        index = index +1
    }
    return index
};