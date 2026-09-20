class Solution {
public:
    int reverseDegree(string s) {
        int res = 0;
        for(int i = 0; i<s.length(); i++){
            int a = s.at(i);
            res+=(123-a)*(i+1);
        }
        return res;
    }
};