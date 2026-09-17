class Solution {
public:
  bool row(vector<vector<char>> &board, int i, int j) {
    for (int k = 0; k < 9; k++) {
      if (k == j) {
        continue;
      }
      if (board[i][k] == board[i][j]) {
        return false;
      }
    }
    return true;
  }
  bool col(vector<vector<char>> &board, int i, int j) {
    for (int k = 0; k < 9; k++) {
      if (k == i) {
        continue;
      }
      if (board[k][j] == board[i][j]) {
        return false;
      }
    }
    return true;
  }

  
  bool block(vector<vector<char>> &board, int i, int j) {
    int row = (i/3)*3;
    int col = (j/3)*3;
    for(int a = 0 ; a < 3 ; a++){
        if (a+row == i) {continue;}
        for(int b = 0 ; b < 3 ; b ++){
            if(b+row == j){
                continue;
            }
            if(board[i][j]==board[row+a][col+b]){
                return false;
            }
        }
    }
    return true;
  }


  
  bool isValidSudoku(vector<vector<char>> &board) {
    for (int i = 0; i < 9; i++) {
      for (int j = 0; j < 9; j++) {
        if (board[i][j] != '.') {
          if (!row(board, i, j) || !col(board, i, j) || !block(board, i, j)) {
            return false;
          }
        }
      }
    }
    return true;
  }
};