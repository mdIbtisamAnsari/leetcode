class Solution {
public:
    string multiply(string num1, string num2) {
    if (num1 == "0" || num2 == "0")
      return "0";
    string ans = "";

    vector<int> result(num1.length() + num2.length(), 0);
    int l = num1.length();
    int m = num2.length();
    for (int i = l - 1; i >= 0; i--) {
      for (int j = m - 1; j >= 0; j--) {
        int product = (num1[i] - '0') * (num2[j] - '0');
        int total = product + result[i + j + 1];
        result[i + j] += total / 10;
        result[i + j + 1] = total % 10;
      }
    }
    for (int i : result) {
      if (!(ans.empty() && i == 0)) {
        ans.push_back(i + '0');
      }
    }
    return ans;
  }
};