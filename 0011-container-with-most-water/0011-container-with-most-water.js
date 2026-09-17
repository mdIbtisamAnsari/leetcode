/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let i = 0;
    let j = height.length -1;
    let min =0
    while (i < j) {
        min = Math.min(height[j] , height[i])
        max = Math.max(min * (j - i), max);
        if(height[i]<height[j]){
            i++
        }else{
            j--
        }
    }

    return max

};