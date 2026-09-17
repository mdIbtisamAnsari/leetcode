/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let closest = 0
    let minDif = 10000000


    for (let i = 0; i < nums.length - 2; i++) {
        if(i>0 && nums[i] === nums[i-1]) continue
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[right] + nums[left];
            if(sum<target){
                let dist = target -sum
                minDif = Math.min(minDif , dist)
                if(minDif === dist){
                    closest = sum
                }
                while(nums[left +1] === nums[left]) left++
                left++
            }else if(sum>target){
                let dist = sum - target
                minDif = Math.min(minDif , dist)
                if(minDif === dist){
                    closest = sum
                }
                while(nums[right -1]=== nums[right]) right--
                right--
            }else{
        
                return target
            }
        }
    }
    return closest
};