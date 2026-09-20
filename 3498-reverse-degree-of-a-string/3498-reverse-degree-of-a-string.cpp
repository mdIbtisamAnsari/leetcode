class Solution {
public:
    int reverseDegree(string s) {
        int res = 0;
        for(int i = 0; i<s.length(); i++){
            res+=(123-s[i])*(i+1);
        }
        return res;
    }
};