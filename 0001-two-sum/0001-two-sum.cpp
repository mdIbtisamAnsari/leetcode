class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> sol(2,-1);
        for (int i = 0; i < nums.size(); i++) {
            for (int j = 0; j < nums.size(); j++) {
                if (i != j && (nums[i] + nums[j]) == target){
                    sol[0]=i;
                    sol[1]=j;
                    return sol;
                }
                    
            }
        }
        return sol;

    }
};