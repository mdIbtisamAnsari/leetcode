class Solution {
public:
    void nextPermutation(vector<int>& nums) {

        if (nums.size()==1){
            return;
        }

        int i = nums.size() - 2;

        while (nums[i] >= nums[i + 1]) {
            i--;
            if(i==-1){
                break;
            }
        }

        int j = nums.size() - 1;
        if (i != -1) {
            while (nums[j] <= nums[i] && j>=i) {
                j--;
            }

            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        int k = i+1;
        int l = nums.size()-1;
        while(k<l){
            int temp = nums[k];
            nums[k] = nums[l];
            nums[l] = temp;
            k++;
            l--;
        }
        
        



        // cout << "i: " << i << endl;
        // cout << "j: " << j << endl;
    }
};