class Solution {
public:
    string countAndSay(int n) {
    string s = "1";
    for (int i = 1; i < n; i++) {
      s = makeNext(s);
    }
    return s;
  }
  string makeNext(string s) {

    string temp = "";
    for (int i = 0; i < s.length(); i++) {
      int count = 1;

      while (i < s.length() - 1 && s[i] == s[i + 1]) {
        count++;
        i++;
      }
      temp += (to_string(count)) + s[i];
    }
    s = temp;

    return s;
  }
};