/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    // console.log(nums)

    let ans = []



    for (let i = 0; i < nums.length - 3; i++) {
        
        if (i > 0 && nums[i] === nums[i - 1]) continue

        for (let k = i + 1; k < nums.length - 2; k++) {

            let j = nums.length - 1

            let l = k+1

            


        if (k > i + 1 && nums[k] === nums[k - 1]) continue
            

            

            
            while (l < j) {
               
                let sum = nums[i] + nums[j] + nums[k] + nums[l]
                if (sum === target) {
                   
                    ans.push([nums[i], nums[j], nums[k], nums[l]])
                    while (nums[j] === nums[j - 1]) j--
                    while (nums[l] === nums[l + 1]) l++

                    j--
                    l++

                }
                else if (sum < target) {
                    l++
                } else {
                    j--
                }
            }

        }
    }
    return ans
};
