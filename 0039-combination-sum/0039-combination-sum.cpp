class Solution {
public:
    void backtrack(vector<int> &current, vector<vector<int>> &result, int start, int target, vector<int> &candidates) {
      if (target == 0) {
        result.push_back(current);
        return;
      }
    for (int i = start; i < candidates.size(); i++) {
      if (candidates[i] <= target) {
        current.push_back(candidates[i]);
        backtrack(current, result, i, target - candidates[i], candidates);
        current.pop_back();
      }
    }
  }

  vector<vector<int>> combinationSum(vector<int> &candidates, int target) {
    vector<vector<int>> result;
    vector<int> current;
    backtrack(current, result, 0, target, candidates);
    return result;
  }
};