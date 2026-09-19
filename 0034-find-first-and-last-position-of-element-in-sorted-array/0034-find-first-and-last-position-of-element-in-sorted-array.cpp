class Solution {
public:
      int callBinary(vector<int> &nums, int target, bool left) {
      int i = 0;
      int j = nums.size() - 1;
      int sol = -1;
      while (i <= j) {
          int mid = (i + j) / 2;
          if (nums[mid] == target) {
              sol = mid;
              if (left) {
                  j = mid - 1;
              } else {
                  i = mid + 1;
              }
          } else if (nums[mid] < target) {
              i = mid + 1;
          } else {
              j = mid - 1;
          }
      }
      return sol;
  }
    

  vector<int> searchRange(vector<int> &nums, int target){
      vector<int> sol(2, -1);
      sol[0] = callBinary(nums, target, true);
      sol[1] = callBinary(nums, target, false);
      return sol;
  }
};