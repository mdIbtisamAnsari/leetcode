class Solution {
public:
    int binary(int i, int j, int target, vector<int> &nums) {
    while (i <= j) {
      int mid = i + ((j - i) / 2);
      if (nums[mid] == target)
        return mid;
      if (target < nums[mid])
        j = mid - 1;
      else
        i = mid + 1;
    }
    return -1;
  }

  int search(vector<int> &nums, int target) {
    int i = 0;
    int j = nums.size() - 1;

    while (j >= i) {
      
        
      int mid = i + ((j - i) / 2);
      if (nums[mid] == target)
        return mid;

      if(nums[mid]<=nums[j]){
          if(nums[mid]<=target && nums[j]>=target) return binary(mid+1, j, target, nums);
          else j=mid-1;
      }else if(nums[i]<=nums[mid]){
          if (nums[i]<=target && nums[mid]>=target)return binary(i, mid-1, target, nums);
          else i=mid+1;
      }
      
    }
    return -1;
  }
};