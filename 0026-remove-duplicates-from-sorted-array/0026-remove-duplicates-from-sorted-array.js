/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let i = 0
    for( i ; i<nums.length ;){
        if (nums[i] >= nums[i+1] && nums[i]!="_"){
            nums.splice(i+1,1)
        }else if(nums[i]!="_"){
            i++
        }else break
    }
    return i
};